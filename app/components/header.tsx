import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Link } from '@remix-run/react'

const menus = [
  {
    text: 'AI Girlfriend',
    link: '#AIGirlfriend',
  },
  {
    text: 'Blog',
    link: '#Blog',
  },
  {
    text: 'Tokenomics',
    link: '#Tokenomics',
  },
  {
    text: 'Roadmap',
    link: '#Roadmap',
  },
  {
    text: '$TWINS',
    link: '#$TWINS',
  },
  {
    text: 'FAQ',
    link: '#FAQ',
  },
]

export function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [openMbMenu, setOpenMbMenu] = useState(false)

  const headerStyle = useSpring({
    top: scrollY > 50 ? '0 !important' : '48px',
    opacity: scrollY > 50 ? 1 : 0.8,
    transition: 'all 0.3s ease',
    // background: scrollY > 50 ? 'rgba(89, 89, 89, 1)' : 'rgba(89, 89, 89, 0.50)',
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <animated.ul
        className="fixed hidden lg:flex z-10 bg-nav-bg rounded-full px-16 py-4 left-1/2 -translate-x-1/2 space-x-[55px] overflow-x-auto whitespace-nowrap"
        style={headerStyle}
      >
        {menus.map((i) => (
          <li
            className="font-montserrat text-white text-[23px] font-normal leading-normal cursor-pointer select-none"
            key={i.text}
          >
            <Link to={i.link}>{i.text}</Link>
          </li>
        ))}
      </animated.ul>
      <animated.div
        className="fixed flex justify-between z-10 bg-nav-bg rounded-full box-border px-5 py-1 left-1/2 -translate-x-1/2"
        style={headerStyle}
      >
        <Link to="/">
          <img src="/onlytwins.ai.svg" className="w-[100px]" alt="" />
        </Link>

        <img
          src="/menu.svg"
          className="w-[40px]"
          alt=""
          onClick={() => setOpenMbMenu(!openMbMenu)}
        />
      </animated.div>

      {openMbMenu && (
        <animated.ul
          className="!fixed z-20 top-0 w-screen rounded-b-2xl left-0 bg-[#595959] py-4 min-h-[60vh] max-h-screen overflow-x-scroll"
          style={{ transition: 'all 2s ease' }}
        >
          <li
            className="text-right px-8 text-white mt-5"
            onClick={() => setOpenMbMenu(!openMbMenu)}
          >
            X
          </li>
          {menus.map((i) => (
            <li
              className="font-montserrat-bold text-white px-8 text-[18px] font-normal leading-normal cursor-pointer select-none mt-6 first:mt-0"
              key={i.text}
            >
              <Link
                to={i.link}
                onClickCapture={() => setOpenMbMenu(!openMbMenu)}
              >
                {i.text}
              </Link>
            </li>
          ))}
        </animated.ul>
      )}
    </>
  )
}

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

const medias = [
  {
    name: 'tiktok',
    icon: '/tiktok.svg',
    link: 'https://www.tiktok.com/@onlytwins.ai',
  },
  {
    name: 'x',
    icon: '/x.svg',
    link: 'https://x.com/OnlyTwins_ai',
  },
  {
    name: 'instagram',
    icon: '/instagram.svg',
    link: 'https://www.instagram.com/onlytwins.ai/',
  },
]

const Media = () => {
  return (
    <ul className="flex items-center gap-1 lg:gap-3 mr-2 lg:mr-8">
      {medias.map((x) => (
        <li
          className="border-2 lg:border-4 border-white rounded-full p-[2px] cursor-pointer"
          key={x.name}
        >
          <Link to={x.link} target="_blank">
            <img src={x.icon} className="lg:max-w-max" alt={x.name} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [openMbMenu, setOpenMbMenu] = useState(false)

  const headerStyle = useSpring({
    top: scrollY > 50 ? '0 !important' : '48px',
    opacity: scrollY > 50 ? 1 : 0.8,
    transition: 'all 0.3s ease',
    // background: scrollY > 50 ? 'rgba(89, 89, 89, 1)' : 'rgba(89, 89, 89, 0.50)',
  })

  const mbHeaderStyle = useSpring({
    opacity: openMbMenu ? 1 : 0,
    transform: openMbMenu ? 'translateY(0%)' : 'translateY(-100%)',
    config: { duration: 500 },
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
      <animated.div
        className="fixed hidden lg:flex z-10 left-1/2 -translate-x-1/2"
        style={headerStyle}
      >
        <Media />
        <ul className="hidden lg:flex z-10 bg-nav-bg rounded-full px-16 py-4 space-x-[55px]  w-full">
          {menus.map((i) => (
            <li
              className="font-montserrat text-white text-[23px] font-normal leading-normal cursor-pointer select-none whitespace-nowrap"
              key={i.text}
            >
              <Link to={i.link}>{i.text}</Link>
            </li>
          ))}
        </ul>
      </animated.div>

      {/* Mobile Nav */}
      <animated.div
        className="fixed lg:hidden flex justify-between z-10 box-border left-[40%] -translate-x-[40%]"
        style={headerStyle}
      >
        <Media />
        <div className="flex items-center bg-nav-bg rounded-full border-2 px-3 py-1">
          <Link to="/">
            <img src="/onlytwins.ai.svg" className="w-[100px]" alt="" />
          </Link>

          <img
            src="/menu.svg"
            className="w-[40px]"
            alt=""
            onClick={() => setOpenMbMenu(!openMbMenu)}
          />
        </div>
      </animated.div>

      {
        <animated.ul
          className="!fixed z-20 top-0 w-screen rounded-b-2xl left-0 bg-[#595959] py-4 min-h-[60vh] max-h-screen overflow-y-scroll"
          aria-hidden={!openMbMenu}
          style={mbHeaderStyle}
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
              role="menuitem"
            >
              <Link to={i.link} onClick={() => setOpenMbMenu(!openMbMenu)}>
                {i.text}
              </Link>
            </li>
          ))}
        </animated.ul>
      }
    </>
  )
}

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
    <animated.ul
      className="fixed flex z-10 bg-nav-bg rounded-full px-16 py-4 left-1/2 -translate-x-1/2 space-x-[55px] overflow-x-auto whitespace-nowrap"
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
  )
}

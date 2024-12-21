import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const menus = [
  {
    text: 'AI Girlfriend',
    link: '/',
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
          {i.text}
        </li>
      ))}
    </animated.ul>
  )
}

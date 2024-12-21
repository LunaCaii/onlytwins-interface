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
  return (
    <ul className="flex fixed z-10 top-12 bg-nav-bg rounded-full px-16 py-4 left-1/2 -translate-x-1/2 space-x-[55px] overflow-x-auto whitespace-nowrap">
      {menus.map((i) => (
        <li
          className="font-montserrat text-white text-[23px] font-normal leading-normal"
          key={i.text}
        >
          {i.text}
        </li>
      ))}
    </ul>
  )
}

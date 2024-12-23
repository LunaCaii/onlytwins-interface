export function Screen() {
  const screens = [
    '/screen-1.svg',
    '/screen-2.svg',
    '/screen-3.svg',
    '/screen-4.svg',
  ]

  return (
    <ul className="main-layout flex">
      {screens.map((screen, index) => (
        <li
          key={screen}
          className={`relative ${index % 2 === 0 ? 'translate-y-24' : ''} ${
            index > 0 ? '-ml-20' : ''
          }`}
        >
          <img src={screen} alt="" />
        </li>
      ))}
    </ul>
  )
}

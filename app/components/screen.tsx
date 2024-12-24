export function Screen() {
  const screens = [
    '/screen-1.svg',
    '/screen-2.svg',
    '/screen-3.svg',
    '/screen-4.svg',
  ]

  return (
    <div className="main-layout max-lg:bg-chain max-lg:bg-cover max-lg:!pt-52 max-lg:!-mt-64 max-lg:!pb-14">
      <ul className="lg:flex hidden">
        {screens.map((screen, index) => (
          <li
            key={screen}
            className={`relative h-fit lg:mt-0 ${
              index % 2 === 0 ? '!mt-20' : ''
            } ${index > 0 ? 'lg:-ml-20' : ''}`}
          >
            <img src={screen} alt="" className="block w-full h-auto" />
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="lg:hidden flex">
        <ul>
          {screens.slice(0, screens.length / 2).map((screen, index) => (
            <li key={index} className="mt-32 first:mt-0">
              <img src={screen} alt="" className="block w-fit h-fit" />
            </li>
          ))}
        </ul>
        <ul className="mt-24 -ml-20">
          {screens
            .slice(screens.length / 2, screens.length)
            .map((screen, index) => (
              <li key={index} className="mt-32 max-w-full">
                <img src={screen} alt="" className="block w-full" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

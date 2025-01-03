export function Screen() {
  const screens = [
    '/screen-1.svg',
    '/screen-2.svg',
    '/screen-3.svg',
    '/screen-4.svg',
  ]

  const screensmb = [
    '/screen-1.png',
    '/screen-2.png',
    '/screen-3.png',
    '/screen-4.png',
  ]

  return (
    <div className="main-layout max-lg:bg-chain max-lg:bg-cover max-lg:!pt-52 max-lg:!-mt-64 max-lg:!pb-14 max-lg:!px-0">
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
      <div className="lg:hidden flex flex-wrap justify-center">
        <div className="w-1/2 px-2">
          <ul>
            {screensmb.slice(0, screensmb.length / 2).map((screen, index) => (
              <li key={index} className="mt-24 first:mt-0">
                <img src={screen} alt="" className="w-full h-auto" />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 px-2 -ml-[69px] mt-20">
          <ul>
            {screensmb
              .slice(screensmb.length / 2, screensmb.length)
              .map((screen, index) => (
                <li key={index} className="mt-32 max-w-full">
                  <img src={screen} alt="" className="w-full h-auto" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

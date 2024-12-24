import { useEffect, useState } from 'react'

export function Twins() {
  const menus = ['1B Supply', 'BNB Chain', 'No Tax', 'Burn LP']

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id="$TWINS" className="main-layout flex flex-col">
      <h2 className="text-white text-center lg:text-start font-montserrat-bold text-[71px] font-extrabold leading-normal">
        <span className="max-lg:text-[#FF007F]">$</span>
        TWINS
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-14">
        <p className="text-white font-poppins text-center lg:text-start text-[16px] lg:text-[23px] font-normal lg:leading-[30px]">
          $TWINS isn’t just about transactions; it’s about creating a thriving
          ecosystem for crypto enthusiasts, meme lovers, and anyone seeking
          meaningful yet fun digital relationships. It bridges the gap between
          utility and entertainment, making it a cornerstone of the Web3
          culture.
          <br /> <br />
          This is more than a coin—it’s the currency of connection, creativity,
          and community. $TWINS is for the dreamers, the builders, and the
          believers in a decentralized future where anything—even AI
          Girlfriends—is possible.
        </p>
        <ul
          className={`${isLargeScreen ? 'relative' : 'grid grid-cols-2 mt-9'}`}
        >
          {menus.map((text, index) => (
            <li
              key={text}
              className={`bg-[#FF007F] rounded-[33px] flex items-center whitespace-nowrap justify-center py-7 lg:py-7 text-white font-montserrat-bold text-[18px] lg:text-[29px] font-extrabold leading-none ${
                isLargeScreen ? 'absolute' : 'relative h-fit'
              } lg:min-w-60 lg:min-h-24`}
              style={
                isLargeScreen
                  ? { top: `${index * 25}%`, left: `${index * 20}%` }
                  : {
                      left: index % 2 === 0 ? '20%' : '-20%',
                      marginTop: index % 2 === 0 ? 0 : '50px',
                    }
              }
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

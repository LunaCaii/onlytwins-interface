export function Twins() {
  const menus = ['1B Supply', 'BNB Chain', 'No Tax', 'Burn LP']
  return (
    <div id="$TWINS" className="main-layout flex flex-col">
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
        $TWINS
      </h2>

      <div className="grid grid-cols-2 gap-14">
        <p className="text-white font-poppins text-[23px] font-normal leading-[30px]">
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
        <ul className="grid grid-cols-4 relative">
          {menus.map((text, index) => (
            <li
              key={text}
              className="bg-[#FF007F] rounded-[33px] flex items-center justify-center py-7 text-white font-montserrat-bold text-[29px] font-extrabold leading-none absolute min-w-60 min-h-24"
              style={{
                boxSizing: 'border-box',
                top: `${index * 25}%`,
                left: `${index * 20}%`,
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

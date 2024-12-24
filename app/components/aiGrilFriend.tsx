export function AiGirlFriend() {
  const aoGirlfriendIntr = [
    {
      label: 'Realistic AI Girlfriend Chat',
      desc: 'Experience advanced conversational AI designed to feel natural, fun, and engaging',
    },
    {
      label: 'AI Girl Customization',
      desc: 'Design unique AI girls with stunning visuals and personality traits that match your vibe.',
    },
    {
      label: 'AI Girlfriend Online Free',
      desc: 'Access your AI Girlfriend anytime, anywhere, without spending a dime.',
    },
  ]

  return (
    <div
      id="AIGirlfriend"
      className="main-layout flex flex-col items-center !py-[100px] shadow-lg0"
    >
      <h2 className="text-white font-montserrat-bold text-[30px] lg:text-[71px] font-extrabold leading-normal">
        AI Girlfriend
      </h2>

      <ul className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-12 lg:mt-24">
        {aoGirlfriendIntr.map((i) => (
          <li
            className="relative w-[270px] mt-10 px-5 py-9 lg:px-12 lg:py-14 lg:mt-0 lg:w-full overflow-hidden grid-rows-3"
            key={i.label}
          >
            <div className="absolute inset-0 bg-no-repeat bg-center bg-[length:100%_100%] z-[-1] bg-rectangle-bg" />

            <p className="text-white text-center lg:text-left font-montserrat-bold text-[18px] lg:text-[29px] font-black leading-normal">
              {i.label}
            </p>
            <p className="text-white font-poppins text-center lg:text-left text-[14px] lg:text-[23px] font-normal leading-normal mt-5 lg:mt-14">
              {i.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

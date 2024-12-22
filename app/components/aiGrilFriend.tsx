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
      desc: '',
    },
  ]

  return (
    <div
      id="AIGirlfriend"
      className="main-layout flex flex-col items-center !py-[100px] shadow-lg"
    >
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
        AI Girlfriend
      </h2>

      <ul className="grid grid-cols-3 gap-12 mt-24">
        {aoGirlfriendIntr.map((i) => (
          <li
            className="bg-rectangle-bg bg-no-repeat bg-cover px-12 py-14"
            key={i.label}
          >
            <p className="text-white font-montserrat text-[29px] font-black leading-normal">
              {i.label}
            </p>
            <p className="text-white font-poppins text-[23px] font-normal leading-normal mt-14">
              {i.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

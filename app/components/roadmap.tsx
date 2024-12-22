export function Roadmap() {
  return (
    <div
      id="Roadmap"
      className="main-layout flex flex-col items-center !py-[100px]"
    >
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
        Only <span className="text-[#FF007F]">$TWINS</span> Roadmap
      </h2>
      <p className="text-white text-center font-poppins text-[23px] font-normal leading-[32px] mt-12">
        In a digital world where humor, innovation, and relationships collide,
        the idea for <br /> $TWINS was born. At its core, $TWINS represents
        duality—connection and <br /> individuality, fun and purpose, memes and
        meaningful interactions.
      </p>
      <div
        className="grid grid-cols-2 bg-router-map-bg bg-no-repeat gap-48 mt-24"
        style={{
          backgroundSize: '140%',
          backgroundPosition: 'center',
        }}
      >
        <ul className="py-28">
          <li className="bg-[#FF027F] rounded-2xl px-8 py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-[32px] font-extrabold leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 1: Setting the Stage
            </p>
            <ul className="mt-6 space-y-3 text-white font-poppins text-[23px] font-normal leading-[23px]">
              <li>Release Girlfriend Chatbot</li>
              <li>Release Girlfriend Chatbot</li>
              <li>Release Girlfriend Chatbot</li>
            </ul>
          </li>

          <li className="flex justify-center -mb-44 mt-32">
            <img src="/rm-index4-2-rect.svg" className="w-[200px]" alt="" />
          </li>
          <li className="bg-[#FF027F] rounded-2xl px-8 py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-[32px] font-extrabold leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 3: Immersive Content
            </p>
            <ul className="mt-6 space-y-3 text-white font-poppins text-[23px] font-normal leading-[23px]">
              <li>Video Generation</li>
              <li>Collaboration with Communities</li>
              <li>Exquisite Growth</li>
            </ul>
          </li>
          <li className="flex justify-center mt-32 w-full">
            <img src="/rm-index4-4-rect.svg" className="w-[200px]" alt="" />
          </li>
        </ul>
        <ul className="py-28">
          <li className="flex justify-center -mb-32">
            <img src="/rm-index4-1-rect.svg" className="w-[200px]" alt="" />
          </li>
          <li className="bg-[#FF027F] rounded-2xl px-8 py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-[32px] font-extrabold leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 2: Enhanced Experiences
            </p>
            <ul className="mt-6 space-y-3 text-white font-poppins text-[23px] font-normal leading-[23px]">
              <li>Image Generation</li>
              <li>Customized Girlfriends</li>
              <li>Expanding Community</li>
            </ul>
          </li>

          <li className="flex justify-center -mb-36 mt-32">
            <img src="/rm-index4-3-rect.svg" className="w-[200px]" alt="" />
          </li>

          <li className="bg-[#FF027F] rounded-2xl px-8 py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-[32px] font-extrabold leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 4: Ultimate Engagement
            </p>
            <ul className="mt-6 space-y-3 text-white font-poppins text-[23px] font-normal leading-[23px]">
              <li>Token Listing on CEX, KuCoin & Gate.io</li>
              <li>Vote-to-Earn for Rewarding Participants</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function Roadmap() {
  return (
    <div
      id="Roadmap"
      className="main-layout box-RoadMap flex flex-col items-center lg:!py-[100px] !mt-4"
    >
      <h2 className="text-white font-montserrat-bold text-center lg:text-start text-[35px] lg:text-[71px] font-extrabold leading-normal">
        Only <span className="text-[#FF007F]">$TWINS</span> Roadmap
      </h2>
      <p className="text-white text-center font-poppins text-[15px] lg:text-[23px] font-normal leading-[22px] lg:leading-[32px] mt-5 lg:mt-12">
        In a digital world where humor, innovation, and relationships collide,
        the idea for <br /> $TWINS was born. At its core, $TWINS represents
        duality—connection and <br /> individuality, fun and purpose, memes and
        meaningful interactions.
      </p>

      <div className="grid grid-cols-2 bg-router-map-bg bg-center bg-cover bg-no-repeat gap-10 lg:gap-48 mt-10 lg:mt-24">
        <ul className="py-28">
          <li className="bg-[#FF027F] rounded-2xl px-2 py-4 lg:px-8 lg:py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-[12px] text-start lg:text-[32px] font-extrabold leading-[20px] lg:leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 1: Setting the Stage
            </p>
            <ul className="mt-2 lg:mt-6 lg:space-y-3 text-start text-white font-poppins text-[10px] lg:text-[23px] font-normal leading-[14px] leading-[16px]">
              <li>Release Girlfriend Chatbot</li>
              <li>Presale Token</li>
              <li>Growing Community</li>
            </ul>
          </li>

          <li className="flex justify-center lg:-mb-44 lg:mt-32 -mb-16 mt-16">
            <img
              src="/rm-index4-2-rect.svg"
              className="w-[100px] lg:w-[200px]"
              alt=""
            />
          </li>
          <li className="bg-[#FF027F] rounded-2xl px-2 py-4 lg:px-8 lg:py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-start text-[12px] lg:text-[32px] font-extrabold leading-normal lg:leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 3: Immersive Content
            </p>
            <ul className="mt-2 lg:mt-6 lg:space-y-3 text-start text-white font-poppins text-[10px] lg:text-[23px] font-normal leading-[14px] lg:leading-[23px]">
              <li>Video Generation</li>
              <li>Collaboration with Communities</li>
              <li>Exquisite Growth</li>
            </ul>
          </li>
          <li className="flex justify-center mt-14 lg:mt-32 w-full">
            <img src="/rm-index4-4-rect.svg" className="w-[200px]" alt="" />
          </li>
        </ul>
        <ul className="py-28">
          <li className="flex justify-center -mb-16 lg:-mb-32">
            <img
              src="/rm-index4-1-rect.svg"
              className="w-[120px] lg:w-[200px]"
              alt=""
            />
          </li>
          <li className="bg-[#FF027F] px-2 py-4 rounded-2xl lg:px-8 lg:py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-start text-[12px] lg:text-[32px] font-extrabold lg:leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 2: Enhanced Experiences
            </p>
            <ul className="mt-2 lg:mt-6 lg:space-y-3 text-white font-poppins text-start text-[10px] lg:text-[23px] font-normal leading-[14px] lg:leading-[23px]">
              <li>Image Generation</li>
              <li>Customized Girlfriends</li>
              <li>Expanding Community</li>
            </ul>
          </li>

          <li className="flex justify-center lg:-mb-36 lg:mt-32 mt-20 -mb-20">
            <img
              src="/rm-index4-3-rect.svg"
              className="w-[100px] lg:w-[200px]"
              alt=""
            />
          </li>

          <li className="bg-[#FF027F] rounded-2xl px-2 py-4 lg:px-8 lg:py-16 text-white max-w-md">
            <p
              className="font-montserrat-bold text-start text-[12px] lg:text-[32px] font-extrabold lg:leading-[32px]"
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Step 4: Ultimate Engagement
            </p>
            <ul className="mt-2 lg:mt-6 lg:space-y-3 text-white text-start font-poppins text-[10px] lg:text-[23px] font-normal leading-[14px] lg:leading-[23px]">
              <li>Token Listing on CEX, KuCoin & Gate.io</li>
              <li>Vote-to-Earn for Rewarding Participants</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

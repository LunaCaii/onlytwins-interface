import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'OnlyTwins' },
    { name: 'description', content: 'Welcome to OnlyTwins!' },
  ]
}

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

export default function Index() {
  const openChat = () => {
    window.open('https://t.me/spicy_pixel_bot', '_blank')
  }

  return (
    <div className="h-screen">
      <div
        className="relative min-h-screen w-screen bg-ai-gril bg-no-repeat bg-center bg-cover"
        style={{
          boxShadow: 'inset 0px -20px 30px rgba(17, 19, 21, 1)',
        }}
      >
        <div className="main-layout absolute top-1/2 -translate-y-1/2 left-0 right-0">
          <img src="/onlytwins.ai.svg" alt="OnlyTwins.ai" />
          <div>
            <p className="text-white font-montserrat text-[69px] font-bold leading-normal">
              Meet Your
            </p>
            <p className="text-[#FF007F] font-montserrat-bold text-[69px] font-extrabold leading-normal">
              AI Companion
            </p>
            <p className="text-white font-poppins text-[23px] font-normal leading-normal">
              Experience meaningful connections, secure interactions, and <br />
              personalized with your AI girl
            </p>
          </div>
          <button
            className="rounded-full bg-[#007BFF] mt-24 px-[90px] py-[18px] text-white font-montserrat text-[23px] font-normal leading-normal"
            onClick={openChat}
          >
            Chat Now
          </button>
        </div>
      </div>

      <div
        id="AIGirlfriend"
        className="main-layout flex flex-col items-center !py-[100px]"
      >
        <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
          AI Girlfriend
        </h2>

        <ul className="grid grid-cols-3 gap-12">
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

      <div className="main-layout !mb-20">
        <img src="/twins-mb.svg" className="select-none" alt="" />

        <p className="text-white font-montserrat-bold text-[71px] font-extrabold leading-[71px] mt-32">
          Have you ever dreamed <br /> about the best girlfriend ever?
        </p>

        <div className="grid grid-cols-2">
          <p className="text-white font-poppins text-[23px] font-normal mt-16 leading-8">
            Experience the future of companionship with Only Twins. Our
            <br />
            advanced artificial intelligence is designed to be your supportive,
            <br />
            fun, and understanding partner.
            <br />
            <br />
            Enjoy intelligent conversation and a drama-free relationship.
            <br />
            Discover how Romantic AI can enrich your life and become your
            <br />
            ultimate soulmate. Explore our features!
          </p>

          <div className="w-full flex justify-center">
            <button
              className="rounded-full bg-[#007BFF] mt-24 px-[90px] py-[18px] text-white font-montserrat text-[23px] font-normal leading-normal flex items-center justify-center w-fit h-fit"
              onClick={openChat}
            >
              <span>Chat Now</span>
              <img src="/chat.svg" className="ml-5" alt="chat" />
            </button>
          </div>
        </div>
      </div>

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
          duality—connection and <br /> individuality, fun and purpose, memes
          and meaningful interactions.
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
    </div>
  )
}

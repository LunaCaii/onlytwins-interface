import type { MetaFunction } from '@remix-run/node'
import { AiGirlFriend } from '~/components/aiGrilFriend'
import { Twins } from '~/components/twins'
import { Blog } from '~/components/blog'
import { Roadmap } from '~/components/roadmap'
import { FAQ } from '~/components/faq'
import { Nsfw } from '~/components/nsfw'

export const meta: MetaFunction = () => {
  return [
    { title: 'OnlyTwins' },
    { name: 'description', content: 'Welcome to OnlyTwins!' },
  ]
}

export default function Index() {
  const openChat = () => {
    window.open('https://t.me/spicy_pixel_bot', '_blank')
  }

  return (
    <div className="h-screen">
      <div
        className="relative min-h-screen w-screen bg-ai-gril bg-no-repeat bg-center bg-cover"
        style={{
          boxShadow: 'inset 0px -60px 40px rgba(17, 19, 21, 1)',
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

        <div
          className="absolute w-full h-5 bottom-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(17, 19, 21, 0), rgba(17, 19, 21, 1))',
          }}
        />
      </div>

      <AiGirlFriend />

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

      <Roadmap />
      <Twins />
      <Blog />
      <FAQ />
      <Nsfw />
    </div>
  )
}

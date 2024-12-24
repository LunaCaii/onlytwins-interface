import type { MetaFunction } from '@remix-run/node'
import { AiGirlFriend } from '~/components/aiGrilFriend'
import { Twins } from '~/components/twins'
import { Blog } from '~/components/blog'
import { Screen } from '~/components/screen'
import { Features } from '~/components/features'
import { Roadmap } from '~/components/roadmap'
import { FAQ } from '~/components/faq'
import { Nsfw } from '~/components/nsfw'
import { Footer } from '~/components/footer'

export const meta: MetaFunction = () => {
  return [
    { title: 'OnlyTwins' },
    { name: 'description', content: 'Welcome to OnlyTwins!' },
  ]
}

export const openChat = () => {
  window.open('https://t.me/spicy_pixel_bot', '_blank')
}

export default function Index() {
  return (
    <div className="lg:h-screen h-[60vh]">
      <div
        className="relative h-full lg:min-h-screen w-screen bg-ai-gril bg-no-repeat bg-center bg-cover"
        style={{
          boxShadow: 'inset 0px -60px 40px rgba(17, 19, 21, 1)',
        }}
      >
        <div className="main-layout absolute lg:top-1/2 lg:-translate-y-1/2 left-0 right-0 bottom-[-90px] max-lg:!px-3">
          <img src="/onlytwins.ai.svg" alt="OnlyTwins.ai" />
          <div className="lg:mt-0 mt-[70px]">
            <p className="text-white text-center font-montserrat-bold lg:text-left text-[45px] lg:text-[69px] font-bold leading-normal whitespace-nowrap">
              Meet Your
            </p>
            <p className="text-[#FF007F] font-montserrat-bold text-[45px] text-center lg:text-left lg:text-[69px] font-extrabold leading-normal whitespace-nowrap">
              AI Companion
            </p>
            <p className="text-white font-poppins text-center lg:text-left text-[12px] lg:text-[23px] font-normal leading-normal">
              Experience meaningful connections, secure interactions, and <br />
              personalized with your AI girl
            </p>
          </div>
          <div className="flex justify-center lg:justify-normal mt-7 lg:mt-0">
            <button
              className="rounded-full bg-[#007BFF] lg:mt-24 px-[90px] py-2 lg:py-[18px] text-white font-montserrat text-[12px] lg:text-[23px] font-normal leading-normal"
              onClick={openChat}
            >
              Chat Now
            </button>
          </div>
        </div>

        <div
          className="hidden lg:block absolute w-full h-5 bottom-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(17, 19, 21, 0), rgba(17, 19, 21, 1))',
          }}
        />
      </div>

      <AiGirlFriend />
      <Screen />
      <Features />
      <Roadmap />
      <Twins />
      <Blog />
      <FAQ />
      <Nsfw />
      <Footer />
    </div>
  )
}

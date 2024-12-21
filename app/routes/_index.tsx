import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'OnlyTwins' },
    { name: 'description', content: 'Welcome to OnlyTwins!' },
  ]
}

export default function Index() {
  return (
    <div className="h-screen">
      <div className="relative min-h-screen w-screen bg-ai-gril bg-no-repeat bg-center bg-cover">
        <div className="absolute top-1/2 -translate-y-1/2 left-40">
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
            onClick={() =>
              window.open('https://t.me/spicy_pixel_bot', '_blank')
            }
          >
            Chat Now
          </button>
        </div>
      </div>

      <div className="h-80 text-green-700">AI Girlfriend</div>
    </div>
  )
}

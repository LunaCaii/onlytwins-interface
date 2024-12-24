import { openChat } from '~/routes/_index'
export function Features() {
  return (
    <div className="main-layout lg:!mb-20 lg:!mt-32">
      <p className="text-white font-montserrat-bold text-center lg:text-left text-[28px] lg:text-[71px] font-extrabold leading-[34px] lg:leading-[71px]">
        Have you ever dreamed <br /> about the best girlfriend ever?
      </p>

      <div className="lg:grid grid-cols-2">
        <p className="text-white text-center lg:text-left font-poppins text-[13px] lg:text-[23px] font-normal mt-5 lg:leading-8">
          Experience the future of companionship with Only Twins. Our advanced
          artificial intelligence is designed to be your supportive, fun, and
          understanding partner.
          <br />
          <br />
          Enjoy intelligent conversation and a drama-free relationship. Discover
          how Romantic AI can enrich your life and become your ultimate
          soulmate. Explore our features!
        </p>

        <div className="w-full flex justify-center">
          <button
            className="rounded-full bg-[#007BFF] mt-12 lg:mt-24 px-[90px] py-2 lg:py-[18px] text-white font-montserrat text-[18px] lg:text-[23px] font-normal leading-normal flex items-center justify-center w-fit h-fit"
            onClick={openChat}
          >
            <span>Chat Now</span>
            <img src="/chat.svg" className="ml-5" alt="chat" />
          </button>
        </div>
      </div>
    </div>
  )
}

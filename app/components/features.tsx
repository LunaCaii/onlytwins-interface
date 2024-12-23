import { openChat } from '~/routes/_index'
export function Features() {
  return (
    <div className="main-layout !mb-20 !mt-32">
      <p className="text-white font-montserrat-bold text-[71px] font-extrabold leading-[71px]">
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
  )
}

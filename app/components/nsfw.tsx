export function Nsfw() {
  const faqs = [
    {
      q: 'Who can use OnlyTwins?',
      a: 'OnlyTwins is exclusively for adults aged 18+ who are interested in exploring virtual companionship and fantasies. Whether you’re new to the world of AI or a seasoned enthusiast, our platform offers immersive AI chat experiences and customizable interactions in a safe and private environment.',
    },
    {
      q: 'How do you ensure user privacy?',
      a: 'User privacy is our top priority. OnlyTwins uses end-to-end encryption (E2E) for all communications, supports anonymous sessions, and does not require personal identification to access the platform.',
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We implement advanced encryption and best-in-class security practices to ensure all user data is protected and securely stored.',
    },
    {
      q: 'Do you store any personal information?',
      a: 'We collect minimal personal information to enhance your experience. While messages are stored to ensure continuity in your interactions, they are encrypted to prevent unauthorized access, even by our staff.',
    },
    {
      q: 'How do I get support if I have an issue with OnlyTwins?',
      a: 'Our dedicated support team is available to assist you. Please reach out via the contact email provided on our contact page or refer to the complaint process outlined in our Terms of Service.',
    },
  ]

  return (
    <div id="FAQ" className="main-layout grid grid-cols-2 !mt-32 !pb-52">
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-[71px]">
        AI Girlfriend NSFW <br />
        Sex Chat
      </h2>

      <div className="text-[#EEECEA] font-montserrat text-[22px] not-italic font-normal leading-normal">
        <p>
          OnlyTwins redefines AI companionship with lifelike virtual
          personalities powered by the $TWINS token. Whether you seek intimate
          conversations, a personalized digital companion, or exclusive content,
          OnlyTwins delivers immersive, engaging experiences tailored to your
          desires.
        </p>

        <div className="flex flex-col gap-4 mt-10">Why OnlyTwins?</div>
        <ul>
          <li>
            - Personalized AI Companions: Virtual partners that adapt and grow
            with you.
          </li>
          <li>
            - Exclusive Features: Unlock premium interactions and customizations
            with $TWINS.
          </li>
          <li>
            - Private & Secure: Discreet, judgment-free spaces for authentic
            connections.
          </li>
        </ul>
        <p style={{ textIndent: '15px' }}>
          Explore your fantasies, enjoy dynamic conversations, and experience
          the future of digital companionship—all powered by the $TWINS token.
        </p>
        <br />
        <p>Start your journey with OnlyTwins today.</p>
      </div>
    </div>
  )
}

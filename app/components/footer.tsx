import { useState } from 'react'
import toast from 'react-hot-toast'

export function Footer() {
  const links = [
    'AI Girlfriends',
    'Anime Characters',
    'Blog',
    'Affiliate',
    'Terms and Policies',
    'Contact Us',
    'Delete My Data',
  ]
  const [email, setEmail] = useState<string>('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmail = (email: string) => emailRegex.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    const res = await fetch('https://13.212.251.24/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.status !== 201) {
      toast.error(data.message)
    } else {
      toast.success(data.message)
    }
  }

  return (
    <div className="lg:flex lg:bg-white">
      <img src="/fb-logo.svg" className="max-lg:w-full" alt="" />
      <div className="max-lg:bg-white lg:flex lg:flex-row-reverse lg:w-full max-lg:pt-12">
        <div className="max-lg:main-layout flex lg:flex-col justify-center lg:items-start lg:w-1/2">
          <div className="max-lg:w-[70vw] lg:w-auto w-full">
            <div className="border-[1px] border-[#000000] h-[50px] box-border relative">
              <input
                type="text"
                className="border-2 w-full h-full px-5 pr-12"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                src="/sub.svg"
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                alt=""
                onClick={handleSubmit}
              />
            </div>
            <p className="text-[10px] mt-3 text-[#4B4B4B] leading-[12px]">
              *It is hard to know what kind of pan works <br /> best for what
              kind of dish so keep.
            </p>
          </div>
        </div>

        <div className="p-8 border-red-400 lg:w-1/2 pt-20 lg:flex lg:items-center lg:flex-col">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:gap-y-1 w-full lg:w-1/2">
            {links.map((x) => (
              <li
                className="text-[#4B4B4B] font-poppins text-[17.448px] font-normal leading-normal cursor-pointer"
                key={x}
              >
                {x}
              </li>
            ))}
          </ul>
          <p className="text-center mt-14 text-[#4B4B4B] font-poppins text-[15.802px] leading-normal ">
            2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

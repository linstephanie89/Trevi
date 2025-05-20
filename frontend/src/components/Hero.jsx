import React, { useState } from 'react'
import { Check } from 'lucide-react'
import glowShape from '../assets/bg_hue.png'
import onboardingImg from '../assets/Idea.png'
import supplierImg from '../assets/Matches.png'

export default function Hero({ scrollToCalculator }) {
  const [open, setOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    const el = document.getElementById('early-access')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#E8F9F7] py-24 px-6"
      style={{
        backgroundImage: `url(${glowShape})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '700px 700px',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Smart Sourcing Starts Here.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
            Trevi helps product founders go from idea to supplier — without the guesswork.
          </p>

          <ul className="text-left text-base sm:text-lg text-gray-800 space-y-4 mb-10 max-w-xl mx-auto md:mx-0">
            <li className="flex items-start gap-3">
              <Check size={20} color="#111827" className="mt-1" />
              Match with credible suppliers and sourcing agents
            </li>
            <li className="flex items-start gap-3">
              <Check size={20} color="#111827" className="mt-1" />
              Simulate landed costs, margins, and tradeoffs
            </li>
            <li className="flex items-start gap-3">
              <Check size={20} color="#111827" className="mt-1" />
              Compare production options before spending a dollar
            </li>
          </ul>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={scrollToEarlyAccess}
              className="bg-[#4FD1C5] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-[#2da193] transition"
            >
              Join Early Access
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full max-w-[650px] h-[650px] mx-auto md:mx-0">
          <img
            src={onboardingImg}
            alt="Onboarding UI"
            className="absolute rounded-xl"
            style={{
              top: '0%',
              left: '0%',
              width: '100%',
              transform: 'rotate(-6deg) scale(1.05)',
              boxShadow: '0 25px 40px rgba(0, 0, 0, 0.2)',
              zIndex: 20,
            }}
          />
          <img
            src={supplierImg}
            alt="Supplier Matches UI"
            className="absolute rounded-xl"
            style={{
              bottom: '0%',
              right: '0%',
              width: '100%',
              transform: 'rotate(4deg) scale(1.05)',
              boxShadow: '0 35px 50px rgba(0, 0, 0, 0.25)',
              zIndex: 10,
            }}
          />
        </div>
      </div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}

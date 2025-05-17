import React from 'react'
import glowShape from '../assets/bg_hue.png'
import onboardingImg from '../assets/Idea.png'
import supplierImg from '../assets/matches.png'

export default function Hero({ onOpenModal, scrollToCalculator }) {
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

        {/* Copy & CTAs */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            From Product Idea<br />
            to Trusted Supplier —<br />
            <span className="text-[#111827]">Smart Sourcing Starts Here.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl">
            Trevi helps founders move from idea to supplier with confidence — matching you with trusted
            partners and delivering <span className="font-semibold text-gray-900">AI-driven insights</span>
            to make smarter decisions on <span className="font-semibold text-gray-900">costs</span>,
            <span className="font-semibold text-gray-900"> margins</span>, and
            <span className="font-semibold text-gray-900"> production fit</span>.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center gap-2 bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-6 py-3 rounded-md font-medium transition"
            >
              Try the Simulator
            </button>
            <button
              onClick={onOpenModal}
              className="border border-[#4FD1C5] text-[#4FD1C5] hover:bg-[#DFF9F5] px-6 py-3 rounded-md font-medium transition"
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Diagonal Images Container */}
        <div className="relative w-full max-w-[650px] h-[650px] mx-auto md:mx-0">
          <img
            src={onboardingImg}
            alt="Onboarding UI"
            className="absolute rounded-xl"
            style={{
              top: '0%', left: '0%', width: '100%',
              transform: 'rotate(-6deg) scale(1.05)',
              boxShadow: '0 25px 40px rgba(0, 0, 0, 0.2)', zIndex: 20,
            }}
          />
          <img
            src={supplierImg}
            alt="Supplier Matches UI"
            className="absolute rounded-xl"
            style={{
              bottom: '0%', right: '0%', width: '100%',
              transform: 'rotate(4deg) scale(1.05)',
              boxShadow: '0 35px 50px rgba(0, 0, 0, 0.25)', zIndex: 10,
            }}
          />
        </div>
      </div>

      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}

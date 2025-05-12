import React from 'react'
import glowShape from '../assets/bg_hue.png'
import informedDec from '../assets/undraw_informed-decision_2jwi.svg'

export default function Hero({ onOpenModal, scrollToCalculator }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 px-6 bg-[#F8FAF9]"
      style={{
        backgroundImage: `url(${glowShape})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top -100px',
        backgroundSize: '700px 700px',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight max-w-xl">
          Bring your product idea to life — without the sourcing chaos.
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8">
          Trevi is your sourcing platform, with a built in co-pilot for founders. We help you move from idea to supplier with confidence by
          matching you with trusted partners and giving you the clarity to make smart decisions on 
          <strong className="text-gray-900"> costs</strong>, 
          <strong className="text-gray-900">margins</strong>, and 
          <strong className="text-gray-900"> production fit</strong>—all in one place.
        </p>



          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <button
              onClick={scrollToCalculator}
              className="inline-block bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Try the Calculator
            </button>

            <button
              onClick={onOpenModal}
              className="inline-block text-[#4FD1C5] border border-[#4FD1C5] hover:bg-[#E2F9F4] px-6 py-3 rounded-md font-medium transition"
            >
              Save My Spot
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={informedDec}
            alt="Illustration of making an informed sourcing decision"
            className="w-[360px] max-w-full"
          />
        </div>
      </div>
    </section>
  )
}

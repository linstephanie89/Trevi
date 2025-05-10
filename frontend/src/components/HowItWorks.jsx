import React, { useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'
import glowShape from '../assets/bg_hue.png'
import {
  DocumentTextIcon,
  ChartBarIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    Icon: DocumentTextIcon,
    title: '1. Describe Your Product',
    desc: 'Tell Trevi what you’re sourcing—product category, desired price range, and target margins.',
  },
  {
    Icon: ChartBarIcon,
    title: '2. Simulate Landed Costs',
    desc: 'Instantly compare total landed costs—tariffs, freight, MOQs—across your top countries.',
  },
  {
    Icon: EnvelopeIcon,
    title: '3. Match with Trusted Partners',
    desc: 'We’ll pair you with vetted suppliers or sourcing agents tailored to your product, region, and readiness.',
  },
]

export default function HowItWorks() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 bg-white scroll-mt-20"
    >
      {/* blown-out hue on right */}
      <div
        className="pointer-events-none select-none absolute top-1/2 right-0 w-[900px] h-[900px] -translate-y-1/2 opacity-60 blur-[200px]"
        style={{
          backgroundImage: `url(${glowShape})`,
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">How Trevi Works</h2>
        <p className="text-gray-700 mb-12">
          In three easy steps, turn guesswork into data-driven sourcing—then join our early
          access list to be first in line when the full beta launches.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {steps.map(({ Icon, title, desc }, i) => (
            <React.Fragment key={title}>
              {/* one step */}
              <div className="flex flex-col items-center max-w-xs">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <Icon className="w-8 h-8 text-[#4FD1C5]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>

              {/* arrow between steps */}
              {i < steps.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-12 bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-8 py-3 rounded-md font-semibold transition"
        >
          Join Early Access
        </button>
      </div>

      <EarlyAccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
      />
    </section>
  )
}

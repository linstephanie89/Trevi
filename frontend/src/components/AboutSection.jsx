import React from 'react'
import glowShape from '../assets/bg_hue.png'
import { BarChart2, DollarSign, Users, Compass } from 'lucide-react'

export default function AboutSection() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Price-Back Sourcing Guidance',
      desc: 'Start with a product idea—Trevi helps you define smart price targets and recommends suppliers and regions that work within your margin goals.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Verified Matches, Not Cold Lists',
      desc: 'We connect you with <strong>vetted sourcing agents and suppliers</strong>, curated by region, product fit, and trust—no more ghosting or guessing.',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Scenario-Based Cost Simulation',
      desc: 'Compare rough landed costs across countries—<strong>tariffs, freight, MOQs, fulfillment</strong>—before you even send an RFQ.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Sourcing Risk Signals',
      desc: 'Get real-time prompts like “85% of results are in China” or “Tariff hike incoming”—so you can diversify and protect your margins early.',
    },
  ]

  return (
    <section id="why-trevi" className="relative overflow-hidden py-16 bg-white">
      {/* top-right glow */}
      <div
        className="absolute -top-48 -right-48 w-[900px] h-[900px] opacity-80 blur-[200px] pointer-events-none select-none"
        style={{
          backgroundImage: `url(${glowShape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '700px 700px',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      {/* bottom-left glow */}
      <div
        className="absolute -bottom-48 -left-48 w-[900px] h-[900px] opacity-80 blur-[200px] pointer-events-none select-none"
        style={{
          backgroundImage: `url(${glowShape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '700px 700px',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Why Trevi?</h2>
        <p className="text-gray-700 mb-12 leading-relaxed">
          Trevi isn’t just another sourcing tool—it’s your behind-the-scenes sourcing guide. Whether you're launching your first private label or scaling your brand, Trevi helps you move with confidence—not confusion.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-6 shadow transition-shadow hover:shadow-2xl"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p
                className="text-gray-600 text-sm"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

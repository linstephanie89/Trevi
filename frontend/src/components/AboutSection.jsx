import React from 'react'
import glowShape from '../assets/bg_hue.png'
import { BarChart2, DollarSign, Users, PackageSearch } from 'lucide-react'

export default function AboutSection() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Start with Clear Cost Targets',
      desc: 'Trevi helps you set smart price points for your product idea, then find suppliers and regions that align — before you invest time or money.',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Compare Global Sourcing Scenarios',
      desc: 'Estimate landed costs across countries — including <strong>freight, tariffs, and MOQ tradeoffs</strong> — powered by <strong>AI-driven insights</strong> tailored to your product.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Curated Matches, Not Cold Leads',
      desc: 'We introduce you to <strong>vetted suppliers and sourcing agents</strong> based on product type, region, and communication history — enhanced with <strongintelligent matching</strong> logic.',
    },
    {
      icon: <PackageSearch className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Stay on Track from Sample to Scale',
      desc: 'Trevi helps you <strong>track sample timelines, production updates, and supplier communication</strong> — with smart nudges to keep your launch on schedule.',
    }
    
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
        <h2 className="text-3xl font-bold mb-4">All-in-One Sourcing</h2>
        <p className="text-gray-700 mb-12 leading-relaxed">
          Trevi isn’t just another supplier list or sourcing form. It’s a sourcing co-pilot that helps you understand your options, meet the right people, and move forward with confidence, especially if it’s your first time.
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

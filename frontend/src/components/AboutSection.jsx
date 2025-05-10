import React, { useState } from 'react'
import glowShape from '../assets/bg_hue.png'
import { BarChart2, DollarSign, Users, Compass } from 'lucide-react'

export default function AboutSection() {
  const benefits = [
    {
      icon: <BarChart2 className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Unified Cost Engine',
      desc: 'One dashboard to <strong>validate products</strong>, estimate landed cost (tariffs + freight + MOQs) and <strong>compare scenarios</strong>—no more tab-hopping.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Margin Impact Modeling',
      desc: 'See exactly <strong>how tariffs, shipping rates, and target prices</strong> affect your profit—so you can adjust before you order.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Verified Partners, Not Just Listings',
      desc: 'Trevi connects you with <strong>vetted suppliers</strong> scored by reliability, lead time & past buyer experience.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#4FD1C5]" />,
      title: 'Dynamic Sourcing Insights',
      desc: 'Automated tips—“85% from China? Consider Vietnam.” or “Trade-war alert: margins at risk”—so you stay one step ahead.',
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
          Stop juggling <strong>half-a-dozen tools</strong> and outdated pricing sheets.  
          Trevi <strong>consolidates product research, cost modeling</strong> and reliable  
          <strong> supplier discovery</strong>—all in one intuitive platform built for small  
          and growing e-commerce brands.
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

import React from 'react'
import hue from '../assets/bg_hue.png'

const marqueeStyles = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 60s linear infinite;
  will-change: transform;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`

export default function SocialProof() {
  const testimonials = [
    {
      quote: 'I’m constantly paying between 5-6 subscriptions for softwares and tools, my freight broker, and a spreadsheet — just to figure out if a product is even viable. If something pulled that together, it’d be game-changing.',
      author: 'Ecommerce Founder',
      title: '5+ Years FBA Experience',
    },
    {
      quote: 'There’s no software for how we source — it’s all relationships, emails, and last-minute pricing conversations. If we could just see hidden costs earlier, we’d make better decisions.',
      author: 'Operations Lead',
      title: 'Interior Design Firm',
    },
    {
      quote: 'Trevi helps simulate rough costs and margin outcomes faster — that’s already a huge win for sellers.',
      author: 'FBA Seller',
      title: 'Multi-Channel Brand Owner',
    },
    {
      quote: 'SMBs need a light, automated way to do what big teams spend weeks modeling.',
      author: 'VP of Strategic Procurement',
      title: 'Global Bank',
    },
    {
      quote: "When you're just starting out, sourcing feels like a black box. Trevi makes it easier to connect with agents and compare costs in one place.",
      author: 'New Seller',
      title: 'Launched First Product Last Year',
    },
    {
      quote: "We spend hours chasing quotes and reworking spreadsheets. Trevi could cut that in half and help us act faster.",
      author: 'Procurement Analyst',
      title: 'Consumer Goods Startup',
    },
  ]

  const looped = [...testimonials, ...testimonials]  

  return (
    <section
      id="social-proof"
      className="relative px-6 py-16 bg-[#F8FAF9] scroll-mt-20"
      style={{
        backgroundImage: `url(${hue})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '1000px 1000px',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <style>{marqueeStyles}</style>

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          What We Heard From Founders and Why Trevi Exists
        </h2>
        <p className="text-sm text-gray-500 tracking-wide">
          We listened to product builders, sourcing agents, and ecommerce sellers — the frustration was universal.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#F8FAF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#F8FAF9] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 w-max">
          {looped.map(({ quote, author, title }, i) => (
            <div
              key={i}
              className="flex-none w-[280px] lg:w-[300px] bg-white p-5 rounded-xl shadow text-gray-800"
            >
              <p className="italic text-base leading-snug mb-2">“{quote}”</p>
              <p className="font-semibold text-sm mb-1">{author}</p>
              {title && <p className="text-xs text-gray-500">{title}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

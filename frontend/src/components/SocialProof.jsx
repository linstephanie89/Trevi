import React from 'react'
import hue from '../assets/bg_hue.png'

// Marquee animation + responsive tweaks
const marqueeStyles = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 90s linear infinite;
  will-change: transform;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
@media (max-width: 640px) {
  .animate-marquee {
    animation-duration: 110s;
  }
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
  ]

  const looped = [...testimonials, ...testimonials] // double for infinite loop

  return (
    <section
      id="social-proof"
      className="relative px-6 py-16 bg-[#F8FAF9] overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: `url(${hue})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '1000px 1000px',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <style>{marqueeStyles}</style>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          What We Heard from Sellers Like You
        </h2>
        <p className="text-sm text-gray-500 tracking-wide">
          We listened to interviews, forums, and sourcing groups — the message was consistent.
        </p>
      </div>

      {/* Scrollable marquee */}
      <div className="overflow-x-auto scrollbar-hide relative">
        <div
          className="flex animate-marquee gap-4 pointer-events-auto"
          style={{ width: 'max-content' }}
        >
          {looped.map(({ quote, author, title }, i) => (
            <div
              key={i}
              className="flex-none w-72 min-w-[280px] mr-2 bg-white p-4 rounded-xl shadow-sm text-gray-800"
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

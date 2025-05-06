import React from 'react'
import hue from '../assets/bg_hue.png'

// Marquee animation + responsive duration
const marqueeStyles = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}
@media (max-width: 640px) {
  .animate-marquee {
    animation-duration: 15s;
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
      quote: 'You don’t need to promise perfect precision. If Trevi helps simulate rough costs and margin outcomes faster — that’s already a huge win for sellers.',
      author: 'FBA Seller',
      title: 'Multi-Channel Brand Owner',
    },
    {
      quote: 'Even at the enterprise level, we still simulate sourcing risk manually. SMBs need a light, automated way to do what big teams spend weeks modeling.',
      author: 'VP of Strategic Procurement',
      title: 'Global Bank',
    },
    {
      quote: 'Alibaba is full of spammy suppliers. I spent weeks chasing leads that turned out to be dead ends—I needed vetted, reliable options instead.',
      author: 'eCommerce Consultant',
      title: 'SMB Sourcing Specialist',
    },
    {
      quote: 'I winged my supplier switch with Google searches and hope, and it cost me thousands in delays. Even a rough simulation upfront would have prevented that.',
      author: 'Shopify Brand Owner',
      title: '2 Years FBA Experience',
    },
    {
      quote: 'I was in “spreadsheet hell” trying to piece together freight, tariffs, and MOQ data across five different tools. A unified sourcing dashboard would be a lifesaver.',
      author: 'Amazon FBA Seller',
      title: '4 Years Selling on Amazon',
    },
    {
      quote: 'I almost moved into India without realizing raw material bottlenecks in my category. A tool that highlights regional strengths and weaknesses would have saved me major headaches.',
      author: 'Product Dev Lead',
      title: 'Sustainable Goods Startup',
    }
  ]

  const looped = [...testimonials, ...testimonials] // seamless loop

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

      {/* Scrollable marquee with swipe support */}
      <div className="overflow-x-auto scrollbar-hide relative">
        <div
          className="flex animate-marquee pointer-events-none"
          style={{ width: 'max-content' }}
        >
          {looped.map(({ quote, author, title }, i) => (
            <div
              key={i}
              className="pointer-events-auto flex-none w-72 min-w-[280px] mr-6 bg-white p-4 rounded-xl shadow-sm text-gray-800"
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

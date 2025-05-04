// src/components/SocialProof.jsx
import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import hue from '../assets/bg_hue.png'

export default function SocialProof({
  signupCount = 0,
  testimonials = [
    {
      quote: 'I’m constantly paying between 5-6 subscriptions for softwares and tools, my freight broker, and a spreadsheet — just to figure out if a product is even viable. If something pulled that together, it’d be game-changing.',
      author: '– Ecommerce Founder',
      title: '5+ Years FBA Experience',
    },
    {
      quote: 'There’s no software for how we source — it’s all relationships, emails, and last-minute pricing conversations. If we could just see hidden costs earlier, we’d make better decisions.',
      author: '–Operations',
      title: 'Interior Design Firm',
    },
    {
        quote: 'You don’t need to promise perfect precision. If Trevi helps simulate rough costs and margin outcomes faster — that’s already a huge win for sellers.',
        author: '– FBA Seller',
        title: 'Multi-Channel Brand Owner',
      },
      {
        quote: 'Even at the enterprise level, we still simulate sourcing risk manually. SMBs need a light, automated way to do what big teams spend weeks modeling.',
        author: '– VP of Strategic Procurement',
        title: 'Global Bank',
      }
  ],
}) {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef(null)
  const count = testimonials.length

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % count)
    }, 5000)
    return () => clearInterval(timer)
  }, [count])

  // Scroll carousel on change
  useEffect(() => {
    const el = carouselRef.current
    if (el) {
      const cardWidth = el.children[0]?.getBoundingClientRect().width || 0
      el.scrollTo({
        left: cardWidth * current,
        behavior: 'smooth',
      })
    }
  }, [current])

  const prev = () => setCurrent((c) => (c - 1 + count) % count)
  const next = () => setCurrent((c) => (c + 1) % count)

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
      {/* Background glow accents */}
      <div className="absolute -top-64 -left-64 w-[800px] h-[800px] opacity-30 blur-[180px] pointer-events-none select-none"
           style={{ backgroundImage: `url(${hue})` }} />
      <div className="absolute -bottom-64 -right-64 w-[800px] h-[800px] opacity-30 blur-[180px] pointer-events-none select-none"
           style={{ backgroundImage: `url(${hue})` }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
            What We Heard from Sellers Like You
        </h2>
        <p className="text-sm text-gray-500 tracking-wide mb-1">
        25+ sellers and sourcing experts interviewed. The message was clear: sourcing is still manual, messy, and margin-blind.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth gap-6"
        >
          {testimonials.map(({ quote, author, title }, i) => (
            <blockquote
              key={i}
              className="flex-none w-full sm:w-3/4 lg:w-1/2 snap-center bg-white p-6 rounded-2xl shadow-md text-gray-800"
            >
              <p className="italic text-lg mb-4">“{quote}”</p>
              <p className="font-semibold">{author}</p>
              {title && <p className="text-sm text-gray-500">{title}</p>}
            </blockquote>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-white rounded-full shadow hover:bg-[#eaf7f6] transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-[#2C7A7B]" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-white rounded-full shadow hover:bg-[#eaf7f6] transition"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-[#2C7A7B]" />
        </button>
      </div>
    </section>
  )
}

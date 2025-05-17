import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function SocialProof() {
  // Reusable wave divider inside component
  function WaveDivider({ variant = 'down', from = '#FFFFFF', to = '#F8FAF9' }) {
    const rotate = variant === 'up' ? 'rotate-180' : '';
    const position = variant === 'down' ? { top: '-1px' } : { bottom: '-1px' };
    return (
      <div className="absolute inset-x-0 overflow-hidden pointer-events-none" style={position}>
        <svg
          className={`block w-full h-20 ${rotate}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z" fill="url(#dividerGrad)" />
        </svg>
      </div>
    );
  }

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
  ];

  const containerRef = useRef(null);
  const scroll = direction => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    const offset = direction === 'left' ? -clientWidth : clientWidth;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="social-proof"
      className="relative overflow-hidden scroll-mt-20 pb-40"
    >
      {/* Top wave: white → brand */}
      <WaveDivider variant="down" from="#FFFFFF" to="#F8FAF9" />

      {/* Background gradient under content */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAF9] opacity-60 pointer-events-none" />

      {/* Header area with extra top/bottom padding */}
      <div className="relative z-10 px-6 py-28 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What We Heard From Founders
        </h2>
        <p className="text-lg text-gray-700">
          Real insights from ecommerce founders, procurement pros, and SMBs who need faster, clearer sourcing.
        </p>
      </div>

      {/* Carousel area with breathing room */}
      <div className="relative z-10 flex items-center px-6 py-8">
        <button
          onClick={() => scroll('left')}
          className="absolute left-6 z-20 p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-white"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={containerRef}
          className="w-full overflow-x-auto snap-x snap-mandatory flex gap-6 scroll-smooth scrollbar-hide"
        >
          {testimonials.map(({ quote, author, title }, i) => (
            <div
              key={i}
              className="snap-center flex-none w-[280px] lg:w-[320px] bg-white p-6 rounded-2xl shadow-lg"
            >
              <Quote className="w-8 h-8 text-teal-400 mb-4" />
              <p className="italic text-gray-800 text-sm leading-relaxed mb-4">
                {quote}
              </p>
              <p className="font-semibold text-gray-900">{author}</p>
              {title && <p className="text-xs text-gray-500 mt-1">{title}</p>}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-6 z-20 p-2 bg-white/80 backdrop-blur rounded-full shadow hover:bg-white"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Bottom wave: brand → white */}
      <WaveDivider variant="up" from="#F8FAF9" to="#FFFFFF" />
    </section>
  );
}

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav({ scrollToCalculator }) {
  const [open, setOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    const el = document.getElementById('early-access')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-gray-900">Trevi</span>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          <a href="#how-it-works"  className="hover:text-gray-900">How</a>
          <a href="#why-trevi"      className="hover:text-gray-900">Features</a>
          <a href="#social-proof"   className="hover:text-gray-900">Testimonials</a>
        </nav>

        {/* Right side: CTA + Hamburger */}
        <div className="flex items-center">
          {/* CTA always shown */}
          <button
            onClick={scrollToEarlyAccess}
            className="bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white font-semibold px-4 py-2 rounded-md transition mr-2"
          >
            Join Early Access
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel (links only) */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-700">
            <a href="#how-it-works" onClick={() => setOpen(false)}>How it works</a>
            <a href="#why-trevi"     onClick={() => setOpen(false)}>Features</a>
            <a href="#social-proof"  onClick={() => setOpen(false)}>Testimonials</a>
          </nav>
        </div>
      )}
    </header>
  )
}

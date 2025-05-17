import React from 'react';

export default function Nav({ scrollToCalculator }) {
  const scrollToEarlyAccess = () => {
    const el = document.getElementById('early-access');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-gray-900">Trevi</span>
        </div>

        {/* Centered nav links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-16 text-base font-medium text-gray-700">
            <li>
              <a href="#how-it-works" className="hover:text-gray-900 transition">
                How
              </a>
            </li>
            <li>
              <a href="#why-trevi" className="hover:text-gray-900 transition">
                Features
              </a>
            </li>
            
            <li>
              <a href="#social-proof" className="hover:text-gray-900 transition">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <button
            onClick={scrollToEarlyAccess}
            className="bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white text-base font-semibold px-6 py-2 rounded-md transition"
          >
            Join Early Access
          </button>
        </div>
      </div>
    </header>
  );
}

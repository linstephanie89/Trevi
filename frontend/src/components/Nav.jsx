import React from 'react';

export default function Nav({ scrollToCalculator }) {
  const scrollToEarlyAccess = () => {
    const el = document.getElementById('early-access');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="text-xl font-bold">Trevi</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#why-trevi"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Why Trevi?
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={scrollToCalculator}
            className="md:hidden bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Calculator
          </button>
          <button
            onClick={scrollToEarlyAccess}
            className="hidden md:inline-block bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Join Early Access
          </button>
        </div>
      </nav>
    </header>
  );
}

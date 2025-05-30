import React from 'react';

export default function Footer({ onContactClick }) {
  return (
    <footer className="bg-gradient-to-b from-white via-teal-50 to-teal-100 text-gray-800 text-sm py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding + Nav */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-2xl font-bold text-gray-900">Trevi</span>
          <nav className="flex space-x-4 text-gray-600">
            <a href="/terms" className="hover:text-teal-600 transition">Terms</a>
            <a href="/privacy" className="hover:text-teal-600 transition">Privacy</a>
            <button
              onClick={onContactClick}
              className="hover:text-teal-600 transition underline underline-offset-2"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Trevi. All rights reserved.
      </div>
    </footer>
  );
}

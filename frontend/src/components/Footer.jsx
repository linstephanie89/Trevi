import React from 'react';
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-teal-50 to-teal-100 text-gray-800 text-sm py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Brand name and links */}
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <span className="text-2xl font-bold text-gray-900">Trevi</span>
          <nav className="flex space-x-4 text-gray-600">
            <a href="/terms" className="hover:text-teal-600">Terms</a>
            <a href="/privacy" className="hover:text-teal-600">Privacy</a>
            <a href="/contact" className="hover:text-teal-600">Contact</a>
          </nav>
        </div>
        {/* Social icons */}
        <div className="flex space-x-4 text-gray-600">
          <a href="#" aria-label="Twitter" className="hover:text-teal-600">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-teal-600">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-teal-600">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-teal-600">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Trevi. All rights reserved.
      </div>
    </footer>
  );
}

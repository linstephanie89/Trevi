// Problem.jsx
import React from 'react';
import { AlertTriangle, Ban, LineChart } from 'lucide-react';

const problems = [
  {
    icon: <Ban className="w-6 h-6 text-[#3BB6A6]" />,
    title: 'Unclear landed costs',
    description: 'Tariffs, shipping, freight, and production costs are hard to estimate until it’s too late.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-[#3BB6A6]" />,
    title: 'Unvetted suppliers',
    description: "You're stuck cold-emailing factories or digging through outdated listings with no real context.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#3BB6A6]" />,
    title: 'No way to simulate margin',
    description: 'You can’t test how viable your idea is before investing real time and money, and that’s risky.',
  },
];

export default function Problem() {
  return (
    <div className="relative">
      {/* Top wave transition */}
      <div className="absolute inset-0 -top-12 z-0">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Main section with white background */}
      <section className="relative bg-white py-20 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Sourcing shouldn’t feel like guesswork
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            If you’ve ever tried to launch a product, you’ve probably run into this:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {problems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-left px-4">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 text-xl mb-2 w-full text-center">{item.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed w-full">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import glowShape from '../assets/bg_hue.png';
import { BarChart2, DollarSign, Users, PackageSearch } from 'lucide-react';
import WaveDivider from './WaveDivider'; // adjust path as needed

const tabs = [
  { key: 'cost', label: 'Cost Targets' },
  { key: 'scenarios', label: 'Scenarios' },
  { key: 'matches', label: 'Supplier Matches' },
  { key: 'timeline', label: 'Launch Timeline' },
];

const benefits = {
  cost: {
    icon: <DollarSign className="w-8 h-8 text-[#4FD1C5]" />, 
    title: 'Start with Clear Cost Targets',
    desc: 'Trevi helps set smart price points, then find suppliers and regions that align — before you invest time or money.',
  },
  scenarios: {
    icon: <BarChart2 className="w-8 h-8 text-[#4FD1C5]" />, 
    title: 'Compare Global Sourcing Scenarios',
    desc: 'Estimate landed costs across countries — including freight, tariffs & MOQ tradeoffs — powered by AI-driven insights.',
  },
  matches: {
    icon: <Users className="w-8 h-8 text-[#4FD1C5]" />, 
    title: 'Curated Matches, Not Cold Leads',
    desc: 'Connect with vetted suppliers & sourcing agents based on product, region, and communication history.',
  },
  timeline: {
    icon: <PackageSearch className="w-8 h-8 text-[#4FD1C5]" />, 
    title: 'Stay on Track from Sample to Scale',
    desc: 'Track sample timelines, production updates, and supplier communication — with smart nudges.',
  },
};

export default function AboutSection() {
  const [active, setActive] = useState('cost');

  return (
    <section id="why-trevi" className="relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-white via-[#E8F9F7]/20 to-white pb-40">
     
      {/* Accent glow + content */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-64 right-0 w-[800px] h-[800px] opacity-50 blur-[200px]"
          style={{ backgroundImage: `url(${glowShape})`, backgroundBlendMode: 'soft-light' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">All-in-One Sourcing</h2>
        <p className="text-gray-700 mb-8">
          Trevi isn’t just a supplier list or form. It’s a sourcing co-pilot that guides you on cost, scenarios, matches, and timelines.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {Object.entries(benefits).map(([key, { icon, title, desc }]) => (
            <div
              key={key}
              onClick={() => setActive(key)}
              className={`p-6 rounded-xl transition-transform hover:scale-[1.02] cursor-pointer ${
                key === active ? 'bg-white shadow-2xl' : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                {icon}
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave: brand tint → white */}
      <WaveDivider variant="up" from="#FFFFFF" to="#E8F9F7" />

    </section>
  );
}

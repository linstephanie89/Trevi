import React from 'react';
import {
  Search,
  Filter,
  User,
  Building,
  LayoutDashboard,
  Package,
  Users,
  Settings as SettingsIcon,
  Sparkles,
  ChevronRight
} from 'lucide-react';

import facialMistImg from '../assets/facial.png';
import mist1 from '../assets/mist1.png';
import mist2 from '../assets/mist2.png';
import mist3 from '../assets/mist3.png';
import mist4 from '../assets/mist4.png';
import mist5 from '../assets/mist5.png';
import mist6 from '../assets/mist6.png';
import mist7 from '../assets/mist7.png';
import mist8 from '../assets/mist8.png';
import mist9 from '../assets/mist9.png';
import mist10 from '../assets/mist10.png';

const productImages = [mist1, mist2, mist3, mist4, mist5, mist6, mist7, mist8, mist9, mist10];

const matches = [
  {
    name: 'BlueRiver Supplies',
    Icon: Building,
    location: 'China',
    matchScore: 82,
    verified: true,
    rating: 4.8,
    categories: ['Private Label', 'White Label', 'Skincare'],
    topPick: true,
  },
  {
    name: 'GlobalCraft Traders',
    Icon: Building,
    location: 'Vietnam',
    matchScore: 74,
    verified: false,
    rating: 4.5,
    categories: ['Custom Label', 'Haircare'],
    topPick: true,
  },
  {
    name: 'Han Sourcing',
    Icon: User,
    location: 'China',
    matchScore: 65,
    verified: true,
    rating: 4.2,
    categories: ['Black Label', 'Cosmetics'],
    topPick: true,
  },
  {
    name: 'Oceanic Labs',
    Icon: Building,
    location: 'Thailand',
    matchScore: 88,
    verified: true,
    rating: 4.9,
    categories: ['Sustainable Packaging', 'Skincare'],
    topPick: true,
  },
  {
    name: 'GreenBox Solutions',
    Icon: Building,
    location: 'Mexico',
    matchScore: 76,
    verified: false,
    rating: 4.3,
    categories: ['Custom Label', 'Food & Beverage'],
    topPick: false,
  },
  {
    name: 'Elevate Agents',
    Icon: User,
    location: 'India',
    matchScore: 69,
    verified: true,
    rating: 4.1,
    categories: ['Black Label', 'Toys & Kids'],
    topPick: false,
  },
  {
    name: 'Crystal Clear Packaging',
    Icon: Building,
    location: 'Vietnam',
    matchScore: 82,
    verified: true,
    rating: 4.7,
    categories: ['Glass Bottles', 'Home Goods'],
    topPick: true,
  },
  {
    name: 'Alpha Sourcing Co.',
    Icon: User,
    location: 'China',
    matchScore: 59,
    verified: false,
    rating: 3.9,
    categories: ['Private Label', 'Cosmetics'],
    topPick: false,
  },
  {
    name: 'PanAsia Traders',
    Icon: Building,
    location: 'Thailand',
    matchScore: 91,
    verified: true,
    rating: 5.0,
    categories: ['White Label', 'Skincare', 'Home Goods'],
    topPick: true,
  },
];

const labelTypes = ['Private Label', 'White Label', 'Custom Label', 'Black Label'];
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Package,          label: 'Products'  },
  { icon: Users,            label: 'Suppliers' },
  { icon: SettingsIcon,     label: 'Settings'  },
];

export default function MatchDashboard() {
  return (
    <div className="min-h-screen flex bg-[#FAFAFA] font-sans text-[#111827]">
      {/* Slim Sidebar */}
      <aside className="w-20 bg-gradient-to-b from-white to-[#F9FEFD] border-r border-gray-200 flex flex-col items-center py-6">
        <h1 className="text-xl font-bold text-[#0D1F3C]">Trevi</h1>
        <nav className="flex flex-col mt-8 space-y-6">
          {navItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              title={label}
              className="p-2 rounded-lg hover:bg-[#E8F9F7] transition-colors cursor-pointer"
            >
              <Icon size={24} className="text-gray-600 hover:text-[#0D1F3C]" />
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Header Card */}
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm w-full max-w-7xl mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={facialMistImg}
              alt="Facial Mist"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <p className="text-sm uppercase text-gray-400 font-medium tracking-wide">
                Idea
              </p>
              <h2 className="text-2xl font-semibold text-[#0D1F3C] tracking-tight">
                Hydrating Facial Mist
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-900 flex-wrap">
            {[
              { label: 'Volume',       value: '1,000 units' },
              { label: 'Target Price', value: '$18.00'      },
            ].map(({ label, value }, idx) => (
              <React.Fragment key={label}>
                <div className="flex flex-col">
                  <span className="text-sm uppercase text-gray-400 font-medium tracking-wide">
                    {label}
                  </span>
                  <span className="text-2xl font-semibold tracking-tight">
                    {value}
                  </span>
                </div>
                {idx === 0 && <div className="h-6 w-px bg-gray-200" />}
              </React.Fragment>
            ))}

            <div className="h-6 w-px bg-gray-200" />

            <div className="flex flex-col">
              <span className="text-sm uppercase font-semibold text-gray-600 mb-1">
                Regions
              </span>
              <div className="flex gap-2">
                {['China', 'Vietnam', 'India'].map(region => (
                  <span
                    key={region}
                    className="bg-[#E4F2F1] text-[#0D1F3C] text-xs font-medium px-3 py-[6px] rounded-full"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matches & Photos */}
        <div className="grid grid-cols-12 gap-8 max-w-7xl">
          {/* Your Matches */}
          <div className="col-span-5 relative">
            <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#0D1F3C]">Your Matches</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Based on your inputs, we've matched you with potential suppliers and agents. You can refine this using the search or filters.
                </p>
              </div>

              <div className="flex gap-2 sticky top-0 bg-[#FAFAFA] pt-2">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm w-full">
                  <Search size={16} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search suppliers"
                    className="w-full text-sm placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
                <button className="flex items-center justify-center bg-white p-2 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition">
                  <Filter size={16} className="text-gray-600" />
                </button>
              </div>

              {matches.map(({ name, Icon, location, matchScore, rating, categories, topPick }) => (
                <div key={name} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition relative">
                  <div className="absolute top-5 right-5 text-sm text-gray-500 font-medium">
                    {rating.toFixed(1)}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-[#E8F9F7] p-3 rounded-lg flex items-center justify-center w-12 h-12">
                      <Icon size={20} className="text-[#0D1F3C]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-[#0D1F3C] tracking-tight">
                          {name}
                        </h4>
                        <span
                          className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                            topPick
                              ? 'bg-gradient-to-r from-[#e6fcfb] to-[#8adbd5] text-[#0D1F3C]'
                              : 'bg-green-50 text-green-700'
                          }`}
                        >
                          {topPick && <Sparkles size={14} />} Match Score: {matchScore}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span className="text-xs bg-[#F3F4F6] px-2 py-[2px] rounded-full">
                          {location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                          <span
                            key={cat}
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              labelTypes.includes(cat)
                                ? 'bg-[#8ccfc1] text-[#0D1F3C]'
                                : 'bg-[#E0F5F1] text-[#0D1F3C]'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                        <span className="bg-[#E8F9F7] text-[#0D1F3C] text-xs px-3 py-1 rounded-full font-medium">
                          {Icon === User ? 'Agent' : 'Supplier'}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={24} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            {/* bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
          </div>

          {/* Divider */}
          <div className="col-span-1 w-px bg-gray-200 h-auto" />

          {/* Product Photos */}
          <div className="col-span-6 relative">
            <div className="max-h-[70vh] overflow-y-auto space-y-4">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-[#0D1F3C]">Product photos</h3>
                <p className="text-sm text-gray-500 mt-1">
                  A few product inspirations from your matches!
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {productImages.map((img, idx) => (
                  <div key={idx} className="rounded-xl shadow-sm hover:shadow-md transition group overflow-hidden">
                    <div className="w-full h-[230px]">
                      <img
                        src={img}
                        alt="Facial mist"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
          </div>
        </div>
      </main>
    </div>
  );
}

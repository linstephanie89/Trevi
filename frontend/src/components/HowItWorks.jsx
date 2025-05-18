import React, { useState, useEffect } from 'react';
import { FileText, BarChart2, Users, Info } from 'lucide-react';
import WaveDivider from './WaveDivider';
import glowShape from '../assets/bg_hue.png';
import onboardingImg from '../assets/Idea.png';
import detailsImg from '../assets/Details.png';
import matchesImg from '../assets/Matches.png';
import InteractiveTool from './Simulation';

const steps = [
  { id: 0, label: 'Describe Your Product Idea', Icon: FileText },
  { id: 1, label: 'Simulate Costs & Margins', Icon: BarChart2 },
  { id: 2, label: 'Discover Vetted Suppliers', Icon: Users },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // Trigger a one-time pulse on the interactive demo when step 1 activates
  useEffect(() => {
    if (activeStep === 1) {
      const el = document.querySelector('.interactive-demo');
      if (el) el.classList.add('pulse-once');
    }
  }, [activeStep]);

  // Smooth scroll to form
  const scrollToForm = (e) => {
    e.preventDefault();
    const section = document.getElementById('early-access');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="space-y-8 max-w-6xl mx-auto ">
            <h3 className="text-3xl font-bold">Describe Your Product Idea</h3>
            <p className="text-gray-600">
              Type a short phrase—e.g. “Hydrating Facial Mist”—and instantly generate the specs Trevi needs to get you started.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <img
                src={onboardingImg}
                alt="Onboarding"
                className="w-full md:w-1/2 rounded-xl shadow-lg transform -rotate-6"
              />
              <img
                src={detailsImg}
                alt="Details"
                className="w-full md:w-1/2 rounded-xl shadow-lg transform rotate-6"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <h3 className="text-3xl font-bold flex items-center">
                Simulate Costs & Margins
                <span className="ml-3 bg-teal-400 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Live Demo
                </span>
              </h3>
              <span className="relative group cursor-pointer">
                <Info size={20} className="text-gray-400" />
                <div className="absolute bottom-full mb-2 w-64 text-xs text-white bg-gray-800 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Enter your own numbers to see margin, breakeven, and regional breakdown live.
                </div>
              </span>
            </div>
            <p className="text-gray-600 text-center">
              Tweak unit cost, shipping, and selling price in our live preview to see your margin, breakeven point, and how each region stacks up.
            </p>
            <p className="text-sm text-gray-500 text-center">
              Explore Your Product Margins (Interactive Tool)
            </p>
            <div className="interactive-demo p-6 rounded-2xl mt-6 hover:shadow-teal-300/40 transition-shadow">
              <InteractiveTool
                placeholderCost="Enter cost"
                placeholderShip="Enter shipping"
                placeholderPrice="Enter price"
              />
            </div>
             
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold">Discover Vetted Suppliers</h3>
            <p className="text-gray-600">
              Browse and filter curated suppliers and agents—complete with match scores, ratings, MOQs and region filters—to find the perfect manufacturing partner.
            </p>
            <div className="flex justify-center mt-8">
              <img
                src={matchesImg}
                alt="Matches"
                className="w-full max-w-5xl rounded-xl shadow-lg transform -rotate-4"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
    id="how-it-works"
    className="relative -mt-8 py-20 overflow-hidden bg-gradient-to-b from-white via-[#E8F9F7] to-white scroll-mt-20"
  >
  
      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10 blur-3xl"
        style={{ backgroundImage: `url(${glowShape})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">How Trevi Works</h2>
        <p className="text-gray-600 mb-8">
          From your first idea to curated supplier matches, Trevi guides you every step of the way.
        </p>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setActiveStep(step.id)}
                className="flex flex-col items-center focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    activeStep === step.id
                      ? 'bg-teal-300 text-white'
                      : 'bg-white border border-gray-300 text-gray-400'
                  }`}
                >
                  <step.Icon size={20} />
                </div>
                <span
                  className={`mt-1 text-xs font-medium ${
                    activeStep === step.id
                      ? 'text-gray-900 border-b-2 border-teal-300 pb-0.5'
                      : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 ${
                    activeStep > step.id ? 'bg-teal-300' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {renderContent()}

        {/* Persistent CTA for all steps */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToForm}
            className="inline-block bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Unlock Early Access
          </button>
          <p className="mt-3 text-gray-600 text-md">
            Unlock full access to all features and save your progress with Trevi.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

/* Global CSS additions:
.interactive-demo:hover {
  box-shadow: 0 0 0 4px rgba(79,209,197,0.3);
}
@keyframes pulse {
  0%,100% { box-shadow: none; }
  50% { box-shadow: 0 0 0 6px rgba(79,209,197,0.4); }
}
.pulse-once {
  animation: pulse 1s ease-out forwards;
}
*/

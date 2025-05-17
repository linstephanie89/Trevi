import React, { useState } from 'react';

export default function ProductIdeaSetup({ onNext }) {
  const [idea, setIdea] = useState('');

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: 'linear-gradient(135deg, #F9FEFD 0%, #E8F9F7 50%, #D0F5EF 100%)' }}
    >
      {/* Page Header */}
      <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-[#0D1F3C] tracking-tight">Welcome to Trevi!</h1>
      <p className="text-gray-500 mt-2">Let’s get started with your product idea</p>

      </div>

      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-10">
        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 font-medium uppercase mb-1">Step 1 of 4</p>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div className="h-2 bg-[#4FD1C5] rounded-full w-1/4" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us your product idea</h2>
          <p className="text-gray-600 text-base">One line is all we need to get started.</p>
        </div>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="e.g. Hydrating Facial Mist, Scented Candle, Bamboo Sunglasses"
          rows={3}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] transition"
        />

        <div className="mt-6 flex justify-end">
          <button
            onClick={onNext}
            disabled={!idea.trim()}
            className="px-6 py-2 bg-[#4FD1C5] text-white rounded-md font-medium hover:bg-[#38B2AC] transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

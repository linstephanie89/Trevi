import React, { useState } from "react";
import WaveDivider from './WaveDivider';
import glowShape from '../assets/bg_hue.png';
import collabImage from '../assets/Collaboration.png';

export default function JoinSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [sourcingChallenges, setSourcingChallenges] = useState([]);
  const [monthlySpend, setMonthlySpend] = useState("");
  const [feedbackCall, setFeedbackCall] = useState(false);
  const [interestLevel, setInterestLevel] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const toggleChallenge = (val) =>
    setSourcingChallenges((prev) =>
      prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="early-access" className="relative bg-white scroll-mt-20">
      <WaveDivider variant="down" from="#F8FAF9" to="#FFFFFF" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-48 -right-48 w-[800px] h-[800px] opacity-80 blur-[200px]"
          style={{ backgroundImage: `url(${glowShape})`, backgroundBlendMode: 'soft-light' }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[800px] h-[800px] opacity-80 blur-[200px]"
          style={{ backgroundImage: `url(${glowShape})`, backgroundBlendMode: 'soft-light' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            We’re building Trevi <span className="text-teal-400">with sellers</span>, not just for them.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            If sourcing has ever felt like a chaotic mess of spreadsheets, emails, and guesswork — you're not alone.
            Trevi is designed to simplify your workflow, but we need your input to build it right.
          </p>
          <img
            src={collabImage}
            alt="Collaboration"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 shadow-inner">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p className="text-red-600">{error}</p>}

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400"
                  required
                  disabled={submitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Role / responsibility <span className="text-teal-400">*</span>
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400"
                    required
                    disabled={submitting}
                  >
                    <option value="">Select your role</option>
                    <option>Founder / Owner</option>
                    <option>Operations Lead</option>
                    <option>Sourcing Manager</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Company type <span className="text-teal-400">*</span>
                  </label>
                  <select
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400"
                    required
                    disabled={submitting}
                  >
                    <option value="">Select company type</option>
                    <option>Amazon FBA</option>
                    <option>DTC / Shopify</option>
                    <option>Agency</option>
                    <option>Manufacturer</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-gray-700">
                  Biggest sourcing challenge(s) <span className="text-teal-400">*</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Hidden costs',
                    'Finding suppliers',
                    'Freight unpredictability',
                    'Tariffs & compliance',
                    'Scaling globally',
                  ].map((ch) => (
                    <label key={ch} className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        checked={sourcingChallenges.includes(ch)}
                        onChange={() => toggleChallenge(ch)}
                        required={sourcingChallenges.length === 0}
                        className="accent-teal-400 mr-2"
                      />
                      {ch}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Monthly sourcing spend <span className="text-teal-400">*</span>
                </label>
                <select
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400"
                  required
                  disabled={submitting}
                >
                  <option value="">Select spend range</option>
                  <option value="<5k">Under $5K</option>
                  <option value="5k-25k">$5K–$25K</option>
                  <option value=">25k">Over $25K</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Would you use Trevi? <span className="text-teal-400">*</span>
                </label>
                <select
                  value={interestLevel}
                  onChange={(e) => setInterestLevel(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400"
                  required
                  disabled={submitting}
                >
                  <option value="">Select an option</option>
                  <option>Yes</option>
                  <option>Maybe</option>
                  <option>No</option>
                </select>
              </div>

              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  checked={feedbackCall}
                  onChange={(e) => setFeedbackCall(e.target.checked)}
                  className="accent-teal-400 mr-2"
                />
                Quick 10-min feedback call
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition"
              >
                {submitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you! 🎉</h3>
              <p className="text-gray-700">You're on our early-access list. We'll be in touch soon!</p>
            </div>
          )}
        </div>
      </div>
      <WaveDivider variant="up" from="#FFFFFF" to="#F8FAF9" />
    </section>
  );
}
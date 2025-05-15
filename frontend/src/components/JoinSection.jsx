import React, { useState } from "react";
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

  const apiUrl = import.meta.env.VITE_API_URL;

  const toggleChallenge = (value) => {
    setSourcingChallenges((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const validate = () => {
    if (!email.trim()) return "Email is required.";
    if (!role) return "Role / responsibility is required.";
    if (!companyType) return "Company type is required.";
    if (sourcingChallenges.length === 0)
      return "Select at least one sourcing challenge.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMsg = validate();
    if (validationMsg) {
      setError(validationMsg);
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/early-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          companyType,
          sourcingChallenges,
          monthlySpend,
          interestLevel,
          feedbackCall,
        }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const roleOptions = [
    "Founder / Owner",
    "Operations Lead",
    "Sourcing / Procurement Manager",
    "Other",
  ];

  const companyOptions = [
    "Amazon FBA",
    "Shopify / DTC",
    "Design Studio / Agency",
    "Manufacturer / Factory",
    "Other",
  ];

  const challengeOptions = [
    "Hidden landed costs",
    "Finding reliable suppliers",
    "Freight unpredictability",
    "Tariffs & compliance",
    "Scaling to new countries",
  ];

  const spendOptions = [
    { value: "", label: "Prefer not to say" },
    { value: "<5k", label: "Under $5K" },
    { value: "5k-25k", label: "$5K–$25K" },
    { value: ">25k", label: "Over $25K" },
  ];

  return (
    <section id="early-access" className="relative py-20 px-6 bg-[#F8FAF9] overflow-hidden scroll-mt-20">
      <div className="absolute -top-48 -right-48 w-[900px] h-[900px] opacity-80 blur-[200px] pointer-events-none select-none"
        style={{
          backgroundImage: `url(${glowShape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '700px 700px',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="absolute -bottom-48 -left-48 w-[900px] h-[900px] opacity-80 blur-[200px] pointer-events-none select-none"
        style={{
          backgroundImage: `url(${glowShape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '700px 700px',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We’re building Trevi <span className="text-[#4FD1C5]">with sellers</span>, not just for them.
          </h2>
          <p className="text-lg text-gray-600">
            If sourcing has ever felt like a chaotic mess of spreadsheets, emails, and guesswork — you're not alone.
            Trevi is designed to simplify your workflow, but we need your input to build it right.
          </p>
          <img
            src={collabImage}
            alt="People collaborating at a laptop"
            className="w-full max-w-sm object-contain mx-auto lg:mx-0"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                required
                disabled={submitting}
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                required
                disabled={submitting}
              >
                <option value="">Select your role</option>
                {roleOptions.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <select
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                required
                disabled={submitting}
              >
                <option value="">Select company type</option>
                {companyOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Biggest Sourcing Challenge(s)
                </label>
                <div className="grid gap-2">
                  {challengeOptions.map((ch) => (
                    <label key={ch} className="flex items-center text-sm text-gray-700 gap-2">
                      <input
                        type="checkbox"
                        checked={sourcingChallenges.includes(ch)}
                        onChange={() => toggleChallenge(ch)}
                        disabled={submitting}
                        className="accent-[#4FD1C5]"
                      />
                      {ch}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Sourcing Spend
                </label>
                <select
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                  disabled={submitting}
                >
                  {spendOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Would you consider using a tool like Trevi if it worked for you?
                </label>
                <select
                    value={interestLevel}
                    onChange={(e) => setInterestLevel(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                    disabled={submitting}
                >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="Maybe">Maybe</option>
                    <option value="No">No</option>
                    <option value="Unsure">Unsure</option>
                </select>
                </div>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={feedbackCall}
                  onChange={(e) => setFeedbackCall(e.target.checked)}
                  disabled={submitting}
                  className="accent-[#4FD1C5]"
                />
                I’d like a quick 10-min feedback call (we’ll reach out via email)
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#4FD1C5] hover:bg-[#38b2ac] text-white font-semibold py-3 px-4 rounded-lg transition"
              >
                {submitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Thank you! 🎉</h3>
              <p className="text-sm">
                You’re on our early-access list. We’ll reach out soon to share progress and invite you to test Trevi’s prototype.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

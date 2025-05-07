import React, { useState, useEffect } from "react";

/**
 * Early‑access modal rewritten to match the recommended data‑collection layout:
 *   • Required: email, role, companyType, at least one sourcingChallenge
 *   • Optional: monthlySpend, opt‑in feedback call
 */
export default function EarlyAccessModal({ show, onClose }) {
  // ─── Form state ────────────────────────────────────────────────────────────
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [sourcingChallenges, setSourcingChallenges] = useState([]); // multi‑select
  const [monthlySpend, setMonthlySpend] = useState("");
  const [feedbackCall, setFeedbackCall] = useState(false);

  // ─── UI / network state ────────────────────────────────────────────────────
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  // Reset form each time the modal is opened
  useEffect(() => {
    if (show) {
      setEmail("");
      setRole("");
      setCompanyType("");
      setSourcingChallenges([]);
      setMonthlySpend("");
      setFeedbackCall(false);
      setError(null);
      setSubmitting(false);
      setSubmitted(false);
    }
  }, [show]);

  // ─── Helpers ──────────────────────────────────────────────────────────────
  const toggleChallenge = (value) => {
    setSourcingChallenges((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
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

  // ─── Submit handler ────────────────────────────────────────────────────────
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
          feedbackCall,
        }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Early access submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!show) return null;

  // ─── Options ───────────────────────────────────────────────────────────────
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

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold mb-4">Join Trevi Early Access</h3>
            {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                  required
                  placeholder="you@example.com"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium">
                  Role / Responsibility <span className="text-red-500">*</span>
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                  required
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roleOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company type */}
              <div>
                <label className="block text-sm font-medium">
                  Company Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                  required
                >
                  <option value="" disabled>
                    Select company type
                  </option>
                  {companyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sourcing challenges (multi‑select) */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Biggest Sourcing Challenge(s) <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {challengeOptions.map((opt) => (
                    <label key={opt} className="inline-flex items-center text-sm gap-2">
                      <input
                        type="checkbox"
                        checked={sourcingChallenges.includes(opt)}
                        onChange={() => toggleChallenge(opt)}
                        disabled={submitting}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Monthly spend (optional) */}
              <div>
                <label className="block text-sm font-medium">Monthly Sourcing Spend</label>
                <select
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                >
                  {spendOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Feedback‑call opt‑in */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={feedbackCall}
                  onChange={(e) => setFeedbackCall(e.target.checked)}
                  id="feedbackCall"
                  disabled={submitting}
                />
                <label htmlFor="feedbackCall" className="text-sm">
                  I’d like a quick 10-min feedback call
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#4FD1C5] text-white px-4 py-2 rounded"
                >
                  {submitting ? "Submitting…" : "Join Waitlist"}
                </button>
              </div>
            </form>
          </>
        ) : (
          // ─── Thank‑you state ───────────────────────────────────────────────
          <>
            <h3 className="text-xl font-bold mb-4">Thank you! 🎉</h3>
            <p className="mb-6 text-sm">
              You’re on our early‑access list. We’ll reach out soon to share progress and invite you to test Trevi’s prototype.
            </p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#4FD1C5] text-white rounded"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

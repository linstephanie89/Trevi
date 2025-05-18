import React, { useState, useEffect } from 'react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch(`${apiUrl}/api/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Network response was not ok');
      }

      setStatus('success');
      window.open(
        'https://docs.google.com/spreadsheets/d/1yKh-pYtRI1YjpMorI-6DthgepkrB_QSEQdB3mbfCGDY/copy',
        '_blank'
      );
    } catch (err) {
      console.error('Download submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          ✨ Trevi is Coming
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Join the waitlist to get sourcing tips, sneak peeks, and updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition"
          >
            {status === 'sending' ? 'Sending...' : 'Join Waitlist'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-500 text-center">{errorMessage}</p>
          )}
        </form>

        {/* Early Access CTA */}
        <div className="mt-8 text-center bg-[#E8F9F7] rounded-xl p-4">
          <p className="text-sm text-gray-800 font-medium mb-2">
            🎁 <span className="text-base font-semibold text-gray-900">
              Want early access + a free sourcing simulation?
            </span>
            <br />
            <span className="text-gray-700 text-sm">
              Unlock exclusive features — no guesswork, no cold outreach.
            </span>
          </p>

          <a
            href="#early-access"
            onClick={onClose}
            className="inline-block mt-2 text-teal-600 hover:text-teal-700 font-semibold text-base underline transition"
          >
            Unlock Early Access →
          </a>
        </div>
      </div>
    </div>
  );
}

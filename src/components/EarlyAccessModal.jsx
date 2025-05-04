// src/components/EarlyAccessModal.jsx
import React, { useState, useEffect } from 'react'

export default function EarlyAccessModal({ show, onClose }) {
  const [email, setEmail]               = useState('')
  const [company, setCompany]           = useState('')
  const [spend, setSpend]               = useState('')
  const [pain, setPain]                 = useState('')
  const [feedbackCall, setFeedbackCall] = useState(false)
  const [submitting, setSubmitting]     = useState(false)
  const [submitted, setSubmitted]       = useState(false)
  const [error, setError]               = useState(null)

  // Whenever the modal is opened, clear all form state
  useEffect(() => {
    if (show) {
      setEmail('')
      setCompany('')
      setSpend('')
      setPain('')
      setFeedbackCall(false)
      setSubmitting(false)
      setError(null)
      setSubmitted(false)
    }
  }, [show])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, spend, pain, feedbackCall })
      })
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`)
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Early access submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold mb-4">Join Trevi Early Access</h3>
            {error && (
              <div className="mb-4 text-red-600">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Company / Brand</label>
                <input
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  placeholder="Acme Co."
                  disabled={submitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Monthly Sourcing Spend</label>
                <select
                  value={spend}
                  onChange={e => setSpend(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  disabled={submitting}
                >
                  <option value="">Prefer not to say</option>
                  <option value="<5k">Under $5K</option>
                  <option value="5k-20k">$5K–$20K</option>
                  <option value=">20k">Over $20K</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Biggest Sourcing Pain</label>
                <textarea
                  rows={2}
                  value={pain}
                  onChange={e => setPain(e.target.value)}
                  className="mt-1 w-full border rounded px-3 py-2"
                  placeholder="e.g. Tariff surprises, vendor reliability…"
                  disabled={submitting}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={feedbackCall}
                  onChange={e => setFeedbackCall(e.target.checked)}
                  id="feedbackCall"
                  disabled={submitting}
                />
                <label htmlFor="feedbackCall" className="text-sm">
                  I’d love a 10-min feedback call
                </label>
              </div>
              <div className="flex justify-end space-x-2">
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
                  {submitting ? 'Submitting…' : 'Join Early Access'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-4">Thank you! 🎉</h3>
            <p className="mb-6">
              You’re on our early-access list. We’ll be in touch as soon as Trevi’s prototype is ready.
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
  )
}

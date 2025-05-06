// src/components/DownloadModal.jsx
import React, { useState, useEffect } from 'react'

export default function DownloadModal({ show, onClose }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const apiUrl = import.meta.env.VITE_API_URL

  // Auto-close after success
  useEffect(() => {
    let t
    if (status === 'success') {
      t = setTimeout(() => {
        setStatus('idle')
        setEmail('')
        onClose()
      }, 1500)
    }
    return () => clearTimeout(t)
  }, [status, onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch(`${apiUrl}/api/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Network response was not ok')
      }

      setStatus('success')

      // Trigger the file download
      window.open(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQJ43IgiOnaY8nC_9UrZYG19LDxl0s0CsD7TUa_3cxbD-2fZqfJ87IfSPfFzFxbSPWomp2YnM2bmcm/pubhtml/export?format=xlsx',
        '_blank'
      )
    } catch (err) {
      console.error('Download submission error:', err)
      setErrorMessage(err.message || 'Something went wrong.')
      setStatus('error')
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">Get the Spreadsheet</h3>

        {status === 'success' ? (
          <p className="text-green-600 text-center">✅ Sending your download now!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2"
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  setStatus('idle')
                  setErrorMessage('')
                  onClose()
                }}
                className="px-4 py-2"
                disabled={status === 'sending'}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#4FD1C5] text-white px-4 py-2 rounded"
              >
                {status === 'sending' ? 'Sending…' : 'Download'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

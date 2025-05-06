import React, { useState } from 'react';

export default function Modal({ show, onClose, onSubmit }) {
  const [email, setEmail] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Get the Spreadsheet</h2>
        <p className="mb-3 text-sm text-gray-600">Enter your email to receive a copy:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
              Cancel
            </button>
            <button type="submit" className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700">
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

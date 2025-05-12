import React, { useState, useMemo } from 'react'
import { ChevronRight, X, Info } from 'lucide-react'
import DownloadModal from './DownloadModal'
import hue from '../assets/bg_hue.png'

const MARKETS = [
  { name: 'China',      code: 'CN', tariff: 125 },
  { name: 'Vietnam',    code: 'VN', tariff:  10 },
  { name: 'India',      code: 'IN', tariff:  10 },
  { name: 'Bangladesh', code: 'BD', tariff:  37 },
  { name: 'Turkey',     code: 'TR', tariff:  10 },
  { name: 'Mexico',     code: 'MX', tariff:  25 },
]

const getFlag = iso =>
  iso
    .toUpperCase()
    .split('')
    .map(c => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join('')

export default function Simulation({ onOpenEarlyAccess }) {
  const [productCost,  setProductCost]  = useState('')
  const [shippingCost, setShippingCost] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')

  const [helpOpen,   setHelpOpen]   = useState(false)
  const [selected,   setSelected]   = useState(null)
  const [showDL,     setShowDL]     = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [showSoon,   setShowSoon]   = useState(false)

  const baseInputs = useMemo(() => ({
    pc: parseFloat(productCost)  || 0,
    sc: parseFloat(shippingCost) || 0,
    sp: parseFloat(sellingPrice) || 0,
  }), [productCost, shippingCost, sellingPrice])

  const markets = useMemo(() =>
    MARKETS.map(m => {
      const base       = baseInputs.pc + baseInputs.sc
      const tariffCost = base * (m.tariff / 100)
      const landed     = base + tariffCost
      const profit     = baseInputs.sp - landed
      const margin     = baseInputs.sp > 0 ? (profit / baseInputs.sp) * 100 : 0
      return { ...m, tariffCost, landed, profit, margin }
    }),
    [baseInputs],
  )

  const handleDownload = email => {
    fetch('/api/download', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email }),
    })
      .then(r => {
        if (!r.ok) throw new Error('Download log failed')
        setDownloaded(true)
        setShowDL(false)
        window.open(
          'https://docs.google.com/spreadsheets/d/1yKh-pYtRI1YjpMorI-6DthgepkrB_QSEQdB3mbfCGDY/export?format=xlsx',
          '_blank'
        )
      })
      .catch(console.error)
  }

  const hasInputs = baseInputs.pc || baseInputs.sc || baseInputs.sp

  const getInsight = margin => {
    if (margin >= 30) return { icon: '✅', text: 'Healthy Margin — Strong sourcing fit', color: 'text-green-700' }
    if (margin >= 10) return { icon: '🟠', text: 'Moderate: worth exploring with adjustments', color: 'text-yellow-700' }
    return             { icon: '❌', text: 'Low margin — likely not viable as is', color: 'text-red-700' }
  }

  return (
    <section
      id="comparison-overview"
      className="relative py-16 px-6 bg-[#F8FAF9] overflow-hidden scroll-mt-20"
      style={{
        backgroundImage:   `url(${hue})`,
        backgroundRepeat:  'no-repeat',
        backgroundPosition:'center center',
        backgroundSize:    '1200px 1200px',
      }}
    >

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Your Product Margins <span className="text-sm text-gray-500">(Interactive Tool)</span>
          </h2>
          <button
            onClick={() => setHelpOpen(o => !o)}
            className="ml-2 p-1 rounded-full hover:bg-gray-100 transition"
            aria-label="Calculator info"
          >
            <Info className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {helpOpen && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-gray-700 relative">
            <button
              onClick={() => setHelpOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <p>Plug in rough estimates for product cost, shipping, and your target price. We'll show you:</p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Tariff impact</strong> by region</li>
              <li><strong>Total landed cost</strong> (including shipping + tariffs)</li>
              <li><strong>Profit per unit</strong> and <strong>margin %</strong></li>
            </ul>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Product Cost (USD)',  val: productCost,  onChange: setProductCost },
            { label: 'Shipping Cost (USD)', val: shippingCost, onChange: setShippingCost },
            { label: 'Selling Price (USD)', val: sellingPrice, onChange: setSellingPrice },
          ].map(({ label, val, onChange }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="number"
                value={val}
                onChange={e => onChange(e.target.value)}
                placeholder="0.00"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#4FD1C5] focus:border-[#4FD1C5]"
              />
            </div>
          ))}
        </div>

        {hasInputs && (
          <div className="mt-6 text-center bg-[#e6f7f5] border border-[#b2eee6] p-4 rounded-lg">
            <p className="text-gray-800">
              Want to save this breakdown and compare more?{' '}
              <button
                onClick={onOpenEarlyAccess}
                className="ml-1 font-semibold text-[#2c7a7b] hover:underline"
              >
                Join Trevi Early Access
              </button>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {markets.map(m => (
          <button
            key={m.name}
            onClick={() => setSelected(s => (s === m.name ? null : m.name))}
            className={`flex items-center gap-2 bg-white shadow px-4 py-2 rounded-lg transition
             ${selected === m.name ? 'ring-2 ring-[#4FD1C5]' : 'hover:ring-1 hover:ring-gray-200'}`}
          >
            <span className="text-2xl">{getFlag(m.code)}</span>
            <span className="font-medium">{m.name}</span>
            <span
              className={`ml-2 px-2 py-0.5 text-sm font-semibold rounded-full ${
                m.margin >= 30 ? 'bg-green-100 text-green-800' :
                m.margin >= 10 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}
            >
              {m.margin.toFixed(0)}%
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        ))}
      </div>

      {selected && (() => {
        const m = markets.find(x => x.name === selected)
        const insight = getInsight(m.margin)
        return (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              {getFlag(m.code)} {m.name}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm mb-6">
              {[
                ['Tariff',        `${m.tariff}%`],
                ['Tariff Cost',   `$${m.tariffCost.toFixed(2)}`],
                ['Landed Cost',   `$${m.landed.toFixed(2)}`],
                ['Profit / Unit', `$${m.profit.toFixed(2)}`],
                ['Margin',        `${m.margin.toFixed(1)}%`],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between">
                  <span className="font-semibold">{label}</span>
                  <span className="font-semibold">{val}</span>
                </div>
              ))}
            </div>

            <p className={`text-center font-medium ${insight.color}`}>
              {insight.icon} {insight.text}
            </p>
          </div>
        )
      })()}

      <div className="text-center mb-16">
        <button
          onClick={() => { setShowDL(true); setDownloaded(false) }}
          className="bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-8 py-3 rounded-2xl font-semibold shadow-md transition"
        >
          Download Full Spreadsheet
        </button>
        {downloaded && (
          <p className="mt-3 text-green-600 font-medium">✅ Check your inbox for the link!</p>
        )}
      </div>

      <DownloadModal
        show={showDL}
        onClose={() => setShowDL(false)}
        onSubmit={handleDownload}
      />

      {showSoon && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
            <h4 className="text-xl font-bold mb-4">Coming Soon!</h4>
            <p className="mb-6">
              Supplier matching & messaging will be live in the full Trevi platform 🛠
            </p>
            <button
              onClick={() => setShowSoon(false)}
              className="bg-[#4FD1C5] hover:bg-[#3FC1B2] text-white px-4 py-2 rounded transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
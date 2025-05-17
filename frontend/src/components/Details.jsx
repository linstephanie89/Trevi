import React, { useState } from 'react';
import {
  Tag, Package, Layers, Globe, Pencil, Info
} from 'lucide-react';

const autoDetectedInitial = [
  {
    icon: Tag,
    label: 'Product Category',
    value: 'Skincare & Beauty',
    editable: true,
    options: ['Skincare & Beauty', 'Apparel', 'Food & Beverage', 'Home Goods', 'Toys & Kids', 'Packaging']
  },
  {
    icon: Package,
    label: 'Likely Material',
    value: 'Plastic or Glass',
    editable: true
  },
  {
    icon: Tag,
    label: 'Suggested Label Type',
    value: 'Private Label',
    editable: true
  },
  {
    icon: Layers,
    label: 'Estimated MOQ Range',
    value: '500 - 1000 units',
    editable: true
  },
  {
    icon: Globe,
    label: 'Best-fit Regions',
    value: 'China, Vietnam',
    editable: true
  },
];

export default function ProductDetailsStep({ onNext }) {
  const [confirmed, setConfirmed] = useState([]);
  const [autoDetected, setAutoDetected] = useState(autoDetectedInitial);
  const [editingLabel, setEditingLabel] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);

  const toggleConfirm = (label) => {
    setConfirmed((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleEditClick = (label, currentValue, options) => {
    setEditingLabel(label);
    setInputValue(currentValue);
    setSelectOptions(options || []);
  };

  const handleSave = () => {
    setAutoDetected((prev) =>
      prev.map((item) =>
        item.label === editingLabel ? { ...item, value: inputValue } : item
      )
    );
    setConfirmed((prev) => [...new Set([...prev, editingLabel])]);
    setEditingLabel(null);
    setInputValue('');
    setSelectOptions([]);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      style={{ background: 'linear-gradient(135deg, #F9FEFD 0%, #E8F9F7 50%, #D0F5EF 100%)' }}
    >
        
    {/* Page Header */}
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-[#0D1F3C] tracking-tight">Welcome to Trevi!</h1>
      <p className="text-gray-500 mt-2">Let’s get started with your product idea</p>
      </div>

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-10">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Step 2 of 4</p>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-[#4FD1C5] h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Here’s what we detected</h2>
        <p className="text-gray-600 mb-8">Based on your product idea, we’ve pre-filled a few details. Feel free to adjust.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {autoDetected.map(({ icon: Icon, label, value, editable, options }) => (
            <div
              key={label}
              onClick={() => toggleConfirm(label)}
              className={`relative group border rounded-lg p-4 flex items-start gap-4
                transition-transform transform cursor-pointer
                confirmed.includes(label)
                  ? 'border-[#4FD1C5] bg-[#E8F9F7]'
                  : 'border-gray-200 bg-white'
              } hover:border-[#4FD1C5]
                hover:shadow-lg
                hover:-translate-y-1 `}
            >
              <Icon size={22} className="mt-1 text-[#0D1F3C]" />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:underline">{label}</h4>
                  <Info size={14} className="text-gray-400" title={`This helps us recommend suppliers based on your product`} />
                </div>
                <p className="text-sm text-gray-600">{value}</p>
              </div>
              {editable && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditClick(label, value, options);
                  }}
                  className="text-gray-400 hover:text-[#0D1F3C]"
                >
                  <Pencil size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onNext}
            disabled={confirmed.length < 3}
            className="px-6 py-2 bg-[#4FD1C5] text-white rounded-md font-medium hover:bg-[#38B2AC] transition disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {editingLabel && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit {editingLabel}</h3>
              {selectOptions.length > 0 ? (
                <select
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                >
                  {selectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
                />
              )}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditingLabel(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#4FD1C5] text-white rounded-md hover:bg-[#38B2AC]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

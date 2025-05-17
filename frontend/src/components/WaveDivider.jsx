import React from 'react';

/**
 * WaveDivider
 * A reusable SVG wave transition between sections.
 *
 * Props:
 * - variant: 'down' (default) draws wave at top flowing from 'from' to 'to';
 *            'up' flips it for bottom transitions.
 * - from: starting color (e.g. '#FFFFFF')
 * - to: ending color (e.g. '#F8FAF9')
 */
export default function WaveDivider({ variant = 'down', from = '#FFFFFF', to = '#F8FAF9' }) {
  const isUp = variant === 'up';
  const positionStyle = isUp ? { bottom: '-1px' } : { top: '-1px' };
  const rotationClass = isUp ? 'rotate-180' : '';

  return (
    <div
      className="absolute inset-x-0 overflow-hidden pointer-events-none"
      style={positionStyle}
    >
      <svg
        className={`block w-full h-20 ${rotationClass}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
          fill="url(#dividerGrad)"
        />
      </svg>
    </div>
  );
}
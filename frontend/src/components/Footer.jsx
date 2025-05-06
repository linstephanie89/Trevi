import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 border-t mt-10">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Trevi — Built for modern sourcing decisions.
      </p>
    </footer>
  );
}

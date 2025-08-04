import React, { useState } from 'react';

export default function OutputSettings({ format, onFormatChange }) {
  const [selectedFormat, setSelectedFormat] = useState(format);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedFormat(value);
    onFormatChange(value);
  };

  return (
    <div className="mt-8 bg-white/70 backdrop-blur-sm border border-gray-200 shadow rounded-lg p-5">
      <label className="block text-gray-800 text-sm font-semibold mb-3">Output Format</label>
      <select
        value={selectedFormat}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-800"
      >
        <option value="jpeg">JPEG (.jpg)</option>
        <option value="png">PNG (.png)</option>
        <option value="webp">WebP (.webp)</option>
      </select>
    </div>
  );
}

import React, { useState } from 'react';

export default function OutputSettings({ format, onFormatChange }) {
  const [selectedFormat, setSelectedFormat] = useState(format);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedFormat(value);
    onFormatChange(value);
  };

  return (
    <div className="mt-6">
      <label className="block text-gray-700 mb-2">Select Output Format</label>
      <select value={selectedFormat} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
        <option value="webp">WebP</option>
      </select>
    </div>
  );
}

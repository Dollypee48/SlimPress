import React, { useState } from 'react';

export default function OutputSettings({ format, onFormatChange }) {
  const [selectedFormat, setSelectedFormat] = useState(format);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedFormat(value);
    onFormatChange(value);
  };

  return (
    <div className="mt-10 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6 transition-all">
      <h2 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Choose Output Format
      </h2>

      <div className="relative">
        <select
          value={selectedFormat}
          onChange={handleChange}
          className="block w-full px-4 py-2.5 pr-10 text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
        >
          <option value="jpeg">JPEG (.jpg)</option>
          <option value="png">PNG (.png)</option>
          <option value="webp">WebP (.webp)</option>
        </select>

        <div className="pointer-events-none absolute top-3.5 right-4 text-gray-500 dark:text-gray-400">
          ▼
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Select the format in which the compressed image should be saved.
      </p>
    </div>
  );
}

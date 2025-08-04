import React, { useState } from 'react';

export default function CompressionControls({ onChange }) {
  const [preset, setPreset] = useState('medium');
  const [customQuality, setCustomQuality] = useState(0.5);
  const [isLossless, setIsLossless] = useState(false);

  const getQualityValue = (presetValue) => {
    return presetValue === 'low' ? 0.2 : presetValue === 'medium' ? 0.5 : 0.8;
  };

  const handlePresetChange = (value) => {
    setPreset(value);
    const quality = getQualityValue(value);
    onChange({ quality, isLossless });
  };

  const handleCustomChange = (value) => {
    setPreset('custom');
    const quality = parseFloat(value);
    setCustomQuality(quality);
    onChange({ quality, isLossless });
  };

  const handleLosslessToggle = () => {
    const newValue = !isLossless;
    setIsLossless(newValue);
    onChange({
      quality:
        preset === 'custom'
          ? customQuality
          : getQualityValue(preset),
      isLossless: newValue,
    });
  };

  const buttonBase =
    'px-4 py-2 rounded-xl text-sm font-medium transition duration-300';

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-md mt-8 space-y-5">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Compression Settings
      </h3>

      <div className="flex flex-wrap gap-3">
        {['low', 'medium', 'high', 'custom'].map((value) => (
          <button
            key={value}
            onClick={() => handlePresetChange(value)}
            className={`${buttonBase} ${
              preset === value
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>

      {preset === 'custom' && (
        <div className="pt-2">
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Custom Quality: {Math.round(customQuality * 100)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={customQuality}
            onChange={(e) => handleCustomChange(e.target.value)}
            className="w-full accent-emerald-600"
          />
        </div>
      )}

      <div className="flex items-center gap-3 pt-1">
        <input
          type="checkbox"
          id="lossless"
          checked={isLossless}
          onChange={handleLosslessToggle}
          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
        />
        <label
          htmlFor="lossless"
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          Enable Lossless Compression
        </label>
      </div>
    </div>
  );
}

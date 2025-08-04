import React, { useState } from 'react';

export default function CompressionControls({ onChange }) {
  const [preset, setPreset] = useState('medium');
  const [customQuality, setCustomQuality] = useState(0.5);
  const [isLossless, setIsLossless] = useState(false);

  const handlePresetChange = (value) => {
    setPreset(value);
    const quality = value === 'low' ? 0.2 : value === 'medium' ? 0.5 : 0.8;
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
    onChange({ quality: preset === 'custom' ? customQuality : preset === 'low' ? 0.2 : preset === 'medium' ? 0.5 : 0.8, isLossless: newValue });
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex gap-4">
        <button onClick={() => handlePresetChange('low')} className={`px-4 py-2 rounded ${preset === 'low' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Low</button>
        <button onClick={() => handlePresetChange('medium')} className={`px-4 py-2 rounded ${preset === 'medium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Medium</button>
        <button onClick={() => handlePresetChange('high')} className={`px-4 py-2 rounded ${preset === 'high' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>High</button>
        <button onClick={() => setPreset('custom')} className={`px-4 py-2 rounded ${preset === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Custom</button>
      </div>
      {preset === 'custom' && (
        <input type="range" min="0.1" max="1" step="0.01" value={customQuality} onChange={(e) => handleCustomChange(e.target.value)} className="w-full" />
      )}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="lossless" checked={isLossless} onChange={handleLosslessToggle} />
        <label htmlFor="lossless" className="text-gray-700">Lossless Compression</label>
      </div>
    </div>
  );
}

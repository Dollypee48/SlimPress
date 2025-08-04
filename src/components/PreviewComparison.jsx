import React, { useState } from 'react';

export default function PreviewComparison({ images }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="mt-6 space-y-8">
      {images.map((img, index) => (
        <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Comparison {index + 1}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center overflow-x-auto">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Original</p>
              <div className="overflow-hidden border rounded">
                <img
                  src={URL.createObjectURL(img.originalFile)}
                  alt={`Original ${index}`}
                  className="w-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Compressed</p>
              <div className="overflow-hidden border rounded">
                <img
                  src={img.url}
                  alt={`Compressed ${index}`}
                  className="w-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <label htmlFor={`zoom-${index}`} className="text-sm text-gray-600">
              Zoom: <span className="font-medium">{zoom}x</span>
            </label>
            <input
              id={`zoom-${index}`}
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

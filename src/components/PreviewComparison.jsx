import React, { useState } from 'react';

export default function PreviewComparison({ images }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="mt-8 space-y-10">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 transition hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Comparison #{index + 1}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2 font-medium">Original</p>
              <div className="overflow-hidden rounded-xl border border-dashed border-gray-300">
                <img
                  src={URL.createObjectURL(img.originalFile)}
                  alt={`Original ${index}`}
                  className="w-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
                />
              </div>
            </div>

          
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2 font-medium">Compressed</p>
              <div className="overflow-hidden rounded-xl border border-dashed border-gray-300">
                <img
                  src={img.url}
                  alt={`Compressed ${index}`}
                  className="w-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
                />
              </div>
            </div>
          </div>

         
          <div className="mt-6 flex items-center gap-4">
            <label htmlFor={`zoom-${index}`} className="text-sm text-gray-600 shrink-0">
              Zoom: <span className="font-semibold text-gray-800">{zoom.toFixed(1)}x</span>
            </label>
            <input
              id={`zoom-${index}`}
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-green-500 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

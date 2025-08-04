import React from 'react';

export default function ImagePreview({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {images.map((img, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-sm">
          <img src={img.url} alt="Compressed Preview" className="w-full h-auto mb-2 rounded" />
          <div className="text-sm text-gray-700">
            <p><span className="font-medium">Original:</span> {img.originalSize} MB</p>
            <p><span className="font-medium">Compressed:</span> {img.compressedSize} MB</p>
            <a href={img.url} download={img.compressedFile.name} className="inline-block mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">Download</a>
          </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

export default function ImagePreview({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {images.map((img, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-4"
        >
          <img
            src={img.url}
            alt={`Compressed Preview ${index}`}
            className="w-full h-52 object-cover rounded-xl mb-4"
          />

          <div className="space-y-1 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-gray-800">Original Size:</span>{' '}
              {img.originalSize} MB
            </p>
            <p>
              <span className="font-semibold text-gray-800">Compressed Size:</span>{' '}
              {img.compressedSize} MB
            </p>
          </div>

          <a
            href={img.url}
            download={img.compressedFile.name}
            className="inline-block mt-4 w-full text-center bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded-lg transition-colors duration-200"
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
}

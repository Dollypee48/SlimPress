
import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About SlimPress</h2>
      <p className="text-gray-700 mb-4">
        SlimPress is a powerful and easy-to-use web application that helps you reduce image file sizes without significant quality loss. Whether you're optimizing images for your website, social media, or storage, this tool makes it fast and simple.
      </p>
      <p className="text-gray-700 mb-4">
        Key features include batch image compression, side-by-side quality comparison, format conversion (JPEG, PNG, WebP), drag-and-drop support, custom and preset compression levels, and both lossy and lossless options.
      </p>
      <p className="text-gray-700">
        Built using React and styled with Tailwind CSS, SlimPress runs entirely in your browser, ensuring your images remain private and secure.
      </p>
    </div>
  );
}

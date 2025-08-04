import React from 'react';

export default function About() {
  return (
    <section className="bg-white/90 rounded-2xl shadow-md p-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b pb-2 border-gray-300">
        About <span className="text-violet-600">SlimPress</span>
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-5">
        <strong>SlimPress</strong> is your go-to tool for fast and reliable image compression. Designed for modern needs,
        it helps reduce image file sizes significantly while preserving exceptional visual quality.
        Whether you're optimizing images for websites, apps, or storage, SlimPress handles it all with ease.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>🔥 Batch compress multiple images at once</li>
        <li>📷 Compare original vs. compressed quality side by side</li>
        <li>🔁 Convert between JPEG, PNG, and WebP formats</li>
        <li>🎛️ Choose between lossy and lossless compression</li>
        <li>🧲 Zoom support with real-time previews</li>
      </ul>

      <p className="text-gray-700 text-base leading-relaxed">
        Built with <span className="font-semibold text-gray-900">React</span> and styled using <span className="font-semibold text-gray-900">Tailwind CSS</span>,
        SlimPress is fast, lightweight, and completely client-side — meaning your files never leave your browser.
        Your privacy is guaranteed while getting top-tier performance.
      </p>
    </section>
  );
}

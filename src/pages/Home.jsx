import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white transition-all duration-300 ease-in-out">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-violet-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to <span className="text-violet-600 dark:text-violet-400">SlimPress</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Compress and convert your images effortlessly with batch uploads, format conversion, and intelligent presets.
            Simple. Fast. Powerful.
          </p>
          <div className="space-x-4">
            <Link
              to="/compress"
              className="inline-block px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-all duration-200 shadow-md"
            >
              Start Compressing
            </Link>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-200 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Smart Compression',
              desc: 'Preserve quality while significantly reducing file size using intelligent algorithms.',
            },
            {
              title: 'Batch Upload',
              desc: 'Drag, drop, and compress multiple images at once for faster productivity.',
            },
            {
              title: 'Format Conversion',
              desc: 'Easily switch between JPG, PNG, WEBP, and more with just one click.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-violet-600 dark:text-violet-300 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-violet-700 dark:bg-violet-600 text-white py-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Slim Your Images?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-slate-100">
            SlimPress is built for photographers, designers, and everyday users who want fast, easy, and reliable image optimization.
          </p>
          <Link
            to="/compress"
            className="inline-block px-8 py-3 bg-white text-violet-700 font-semibold rounded-full hover:bg-slate-100 transition duration-200 shadow-lg"
          >
            Get Started Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

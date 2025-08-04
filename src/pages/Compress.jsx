import React, { useState, useEffect } from 'react';
import ImageUploader from '../components/ImageUploader';
import CompressionControls from '../components/CompressionControls';
import ImagePreview from '../components/ImagePreview';
import PreviewComparison from '../components/PreviewComparison';
import OutputSettings from '../components/OutputSettings';
import DownloadAllButton from '../components/DownloadAllButton';
import useImageCompressor from '../hooks/useImageCompressor';

export default function Compress() {
  const [files, setFiles] = useState([]);
  const [quality, setQuality] = useState(0.5);
  const [isLossless, setIsLossless] = useState(false);
  const [format, setFormat] = useState('jpeg');
  const { compressedImages, compressImages, isCompressing } = useImageCompressor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFiles = (selectedFiles) => setFiles(selectedFiles);
  const handleControlsChange = ({ quality, isLossless }) => {
    setQuality(quality);
    setIsLossless(isLossless);
  };
  const handleCompress = () => {
    compressImages(files, quality, isLossless, format);
  };

  return (
    <main className="pt-24 min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
       
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100">
            Compress Your Images Efficiently
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Upload images, fine-tune compression settings, and download high-quality optimized results.
          </p>
        </header>

       
        <section className="space-y-10 bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-6 md:p-10 transition-all">
        
          <ImageUploader onFilesSelected={handleFiles} />

        
          <div className="grid md:grid-cols-2 gap-6">
            <CompressionControls
              onChange={handleControlsChange}
              quality={quality}
              isLossless={isLossless}
            />
            <OutputSettings format={format} onFormatChange={setFormat} />
          </div>

    
          <div className="flex justify-center pt-4">
            <button
              onClick={handleCompress}
              disabled={!files.length || isCompressing}
              className="px-8 py-3 rounded-xl bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCompressing ? 'Compressing...' : 'Compress Images'}
            </button>
          </div>

          {compressedImages.length > 0 && (
            <div className="space-y-10">
              <ImagePreview images={compressedImages} />
              <PreviewComparison images={compressedImages} />
              <div className="flex justify-center">
                <DownloadAllButton images={compressedImages} format={format} />
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

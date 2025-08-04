import React, { useState } from 'react';
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

  const handleFiles = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  const handleControlsChange = ({ quality, isLossless }) => {
    setQuality(quality);
    setIsLossless(isLossless);
  };

  const handleCompress = () => {
    compressImages(files, quality, isLossless, format);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Image Compressor</h2>

      <div className="space-y-6">
        <ImageUploader onFilesSelected={handleFiles} />
        <CompressionControls onChange={handleControlsChange} quality={quality} isLossless={isLossless} />
        <OutputSettings format={format} onFormatChange={setFormat} />

        <button
          onClick={handleCompress}
          disabled={!files.length || isCompressing}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {isCompressing ? 'Compressing...' : 'Compress Images'}
        </button>

        {compressedImages.length > 0 && (
          <>
            <ImagePreview images={compressedImages} />
            <PreviewComparison images={compressedImages} />
            <DownloadAllButton images={compressedImages} format={format} />
          </>
        )}
      </div>
    </div>
  );
}

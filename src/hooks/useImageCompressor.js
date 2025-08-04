import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function useImageCompressor() {
  const [compressedImages, setCompressedImages] = useState([]);
  const [isCompressing, setIsCompressing] = useState(false);

  const compressImages = async (files, quality, isLossless) => {
    setIsCompressing(true);
    const compressed = [];

    for (const file of files) {
      const options = {
        maxSizeMB: isLossless ? 10 : 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: isLossless ? 1 : quality
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const originalSize = (file.size / 1024 / 1024).toFixed(2);
        const compressedSize = (compressedFile.size / 1024 / 1024).toFixed(2);

        compressed.push({
          originalFile: file,
          compressedFile,
          originalSize,
          compressedSize,
          url: URL.createObjectURL(compressedFile)
        });
      } catch (error) {
        console.error('Compression failed:', error);
      }
    }

    setCompressedImages(compressed);
    setIsCompressing(false);
  };

  return { compressedImages, compressImages, isCompressing };
}

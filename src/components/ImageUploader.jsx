import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';

export default function ImageUploader({ onFilesSelected }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setSelectedFiles(acceptedFiles);
      onFilesSelected(acceptedFiles);
    }
  });

  return (
    <div
      {...getRootProps()}
      className="p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center space-y-2">
        <UploadCloud className="w-10 h-10 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-600 dark:text-gray-300 text-base">
          <span className="font-medium text-gray-800 dark:text-gray-100">Drag & drop</span> your images here, or <span className="text-green-600 dark:text-green-400">click to browse</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Supported formats: JPG, PNG, WebP</p>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-6 text-left max-h-40 overflow-y-auto">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Selected files:</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {selectedFiles.map((file, index) => (
              <li key={index} className="truncate">{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

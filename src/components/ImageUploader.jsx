import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

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
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer" {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="text-gray-600">Drag & drop images here, or click to select files</p>
      {selectedFiles.length > 0 && (
        <ul className="mt-4 text-left">
          {selectedFiles.map((file, index) => (
            <li key={index} className="text-sm text-gray-700 truncate">{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
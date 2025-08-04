import React, { useRef } from "react";

export default function DragDropArea({ onFilesSelected }) {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith("image/")
    );
    if (files.length) {
      onFilesSelected(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files).filter(file =>
      file.type.startsWith("image/")
    );
    if (files.length) {
      onFilesSelected(files);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
      className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
    >
      <p className="text-gray-600">Drag and drop images here, or click to select</p>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileSelect}
        multiple
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

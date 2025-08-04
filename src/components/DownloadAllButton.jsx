import React from "react";

export default function DownloadAllButton({ images }) {
  const handleDownloadAll = () => {
    images.forEach((img, index) => {
      const link = document.createElement("a");
      link.href = img.url;
      link.download = img.name || `compressed-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      onClick={handleDownloadAll}
      disabled={!images.length}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      Download All
    </button>
  );
}

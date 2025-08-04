
export async function compressImage(file, quality, format) {
  const imageBitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);

  const mimeType = format === 'png' ? 'image/png' : format === 'webp' ? 'image/webp' : 'image/jpeg';

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        const compressedFile = new File([blob], file.name, {
          type: mimeType,
          lastModified: Date.now(),
        });
        resolve(compressedFile);
      },
      mimeType,
      quality
    );
  });
}
export function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function createConvertedFilename(originalName, fromFormat, toFormat) {
  return `${originalName.replace(fromFormat, '')}_converted${toFormat}`;
}
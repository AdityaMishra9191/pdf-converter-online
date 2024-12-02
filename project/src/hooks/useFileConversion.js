import { useState, useCallback } from 'react';
import { convertDocxToPdf, convertPdfToDocx } from '../utils/fileConversion';
import { downloadFile, createConvertedFilename } from '../utils/downloadHelper';
import { SUPPORTED_FORMATS } from '../utils/constants';

export function useFileConversion() {
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);

  const handleConversion = useCallback(async (file, conversionType) => {
    if (!file || !conversionType) return;

    setIsConverting(true);
    setError(null);

    try {
      const fileBuffer = await file.arrayBuffer();
      let result;
      let blob;

      if (conversionType === 'docx-to-pdf') {
        result = await convertDocxToPdf(fileBuffer);
        blob = new Blob([result], { type: SUPPORTED_FORMATS.PDF.mimeType });
        downloadFile(
          blob,
          createConvertedFilename(file.name, SUPPORTED_FORMATS.DOCX.extension, SUPPORTED_FORMATS.PDF.extension)
        );
      } else {
        result = await convertPdfToDocx(fileBuffer);
        blob = new Blob([result], { type: SUPPORTED_FORMATS.DOCX.mimeType });
        downloadFile(
          blob,
          createConvertedFilename(file.name, SUPPORTED_FORMATS.PDF.extension, SUPPORTED_FORMATS.DOCX.extension)
        );
      }
    } catch (err) {
      setError('Error converting file. Please try again.');
      console.error('Conversion error:', err);
    } finally {
      setIsConverting(false);
    }
  }, []);

  return { handleConversion, isConverting, error };
}
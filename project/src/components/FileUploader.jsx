import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

export function FileUploader({ onFileSelect, conversionType }) {
  const getAcceptedTypes = () => {
    const types = {
      'docx-to-pdf': {
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
      },
      'pdf-to-docx': {
        'application/pdf': ['.pdf']
      },
      'split-pdf': {
        'application/pdf': ['.pdf']
      },
      'merge-pdf': {
        'application/pdf': ['.pdf']
      },
      'protect-pdf': {
        'application/pdf': ['.pdf']
      },
      'unlock-pdf': {
        'application/pdf': ['.pdf']
      },
      'pdf-to-image': {
        'application/pdf': ['.pdf']
      },
      'rotate-pdf': {
        'application/pdf': ['.pdf']
      }
    };
    return types[conversionType] || {};
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getAcceptedTypes(),
    multiple: conversionType === 'merge-pdf'
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer
        ${isDragActive 
          ? 'border-indigo-500 bg-indigo-50 scale-105' 
          : 'border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'}
        transform duration-200 ease-in-out
      `}
    >
      <input {...getInputProps()} />
      <FiUploadCloud className="mx-auto text-5xl mb-4 text-indigo-500" />
      {isDragActive ? (
        <p className="text-indigo-600 font-medium">Drop your files here...</p>
      ) : (
        <div>
          <p className="text-gray-700 text-lg mb-2">
            Drag & drop your {conversionType?.includes('pdf') ? 'PDF' : 'DOCX'} file here
          </p>
          <p className="text-sm text-gray-500">
            or click to select from your computer
          </p>
          {conversionType === 'merge-pdf' && (
            <p className="text-xs text-indigo-600 mt-2">
              You can select multiple PDF files for merging
            </p>
          )}
        </div>
      )}
    </div>
  );
}
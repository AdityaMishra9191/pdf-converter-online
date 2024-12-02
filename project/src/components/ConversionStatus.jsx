import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';

export function ConversionStatus({ isConverting, fileName, onConvert, error }) {
  return (
    <div className="mt-8 text-center">
      {fileName && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <FiCheck className="text-green-500" />
            <p className="text-gray-700">Selected: <span className="font-medium">{fileName}</span></p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-red-600">
            <FiAlertCircle />
            <p>{error}</p>
          </div>
        </div>
      )}
      
      {isConverting ? (
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner />
          <p className="text-gray-600 animate-pulse">
            Converting your document, please wait...
          </p>
        </div>
      ) : (
        fileName && (
          <button
            onClick={onConvert}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg
              hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all
              shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isConverting}
          >
            Convert Now
          </button>
        )
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { ConversionOptions } from './components/ConversionOptions';
import { ConversionStatus } from './components/ConversionStatus';
import { ProfileHeader } from './components/ProfileHeader';
import { useFileConversion } from './hooks/useFileConversion';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionType, setConversionType] = useState(null);
  const { handleConversion, isConverting, error } = useFileConversion();

  const handleConvert = () => {
    handleConversion(selectedFile, conversionType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <ProfileHeader />
        
        <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-white/80 border border-gray-100">
          <ConversionOptions 
            onSelect={setConversionType}
            selectedType={conversionType}
          />
          <FileUploader 
            onFileSelect={setSelectedFile}
            conversionType={conversionType}
          />
          
          <ConversionStatus
            isConverting={isConverting}
            fileName={selectedFile?.name}
            onConvert={handleConvert}
            error={error}
          />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 Aditya Smart Document Converter. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { 
  FiFileText, 
  FiFile, 
  FiScissors, 
  FiLock, 
  FiUnlock, 
  FiImage, 
  FiRotateCw, 
  FiLayers 
} from 'react-icons/fi';

export function ConversionOptions({ onSelect, selectedType }) {
  const options = [
    {
      id: 'docx-to-pdf',
      icon: <FiFileText />,
      label: 'Word to PDF',
      description: 'Convert DOCX to PDF',
      color: 'blue'
    },
    {
      id: 'pdf-to-docx',
      icon: <FiFile />,
      label: 'PDF to Word',
      description: 'Convert PDF to DOCX',
      color: 'green'
    },
    {
      id: 'split-pdf',
      icon: <FiScissors />,
      label: 'Split PDF',
      description: 'Split PDF into pages',
      color: 'purple'
    },
    {
      id: 'merge-pdf',
      icon: <FiLayers />,
      label: 'Merge PDF',
      description: 'Combine multiple PDFs',
      color: 'orange'
    },
    {
      id: 'protect-pdf',
      icon: <FiLock />,
      label: 'Protect PDF',
      description: 'Add password protection',
      color: 'red'
    },
    {
      id: 'unlock-pdf',
      icon: <FiUnlock />,
      label: 'Unlock PDF',
      description: 'Remove PDF password',
      color: 'teal'
    },
    {
      id: 'pdf-to-image',
      icon: <FiImage />,
      label: 'PDF to Image',
      description: 'Convert PDF to JPG/PNG',
      color: 'pink'
    },
    {
      id: 'rotate-pdf',
      icon: <FiRotateCw />,
      label: 'Rotate PDF',
      description: 'Rotate PDF pages',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color, isSelected) => {
    const baseClasses = 'flex flex-col items-center gap-2 p-4 rounded-xl transition-all transform hover:scale-105 cursor-pointer';
    const colorMap = {
      blue: isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: isSelected ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: isSelected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: isSelected ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      red: isSelected ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100',
      teal: isSelected ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600 hover:bg-teal-100',
      pink: isSelected ? 'bg-pink-600 text-white' : 'bg-pink-50 text-pink-600 hover:bg-pink-100',
      indigo: isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
    };
    
    return `${baseClasses} ${colorMap[color]} ${isSelected ? 'shadow-lg scale-105' : ''}`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={getColorClasses(option.color, selectedType === option.id)}
        >
          <span className="text-2xl">{option.icon}</span>
          <span className="font-medium">{option.label}</span>
          <span className="text-xs opacity-75">{option.description}</span>
        </button>
      ))}
    </div>
  );
}
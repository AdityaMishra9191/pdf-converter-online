import React from 'react';

export function ProfileHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGg_csHHGjCkA/profile-displayphoto-shrink_800_800/0/1673893385492?e=1711584000&v=beta&t=Wd_mWYDM_zLbvGRRQY9uvKYmMbGzKqEFWb8XxNrwk8Y"
            alt="Aditya Kumar Mishra"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Developer</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
        Smart Document Converter
      </h1>
      <p className="text-gray-600 text-lg mb-2">
        Convert your documents seamlessly with ML-powered accuracy
      </p>
      <p className="text-indigo-600 font-medium">
        Created by Aditya Kumar Mishra
      </p>
    </div>
  );
}
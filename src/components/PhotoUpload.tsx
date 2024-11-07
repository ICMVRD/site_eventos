import React from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploadProps {
  index: number;
  onChange: (file: File) => void;
  preview: string | null;
}

export const PhotoUpload: React.FC<PhotoUploadProps> = ({ index, onChange, preview }) => {
  return (
    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onChange(file);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      {preview ? (
        <img
          src={preview}
          alt={`Preview ${index + 1}`}
          className="w-full h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-40">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">Foto {index + 1}</span>
        </div>
      )}
    </div>
  );
};
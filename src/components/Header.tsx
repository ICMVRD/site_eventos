import React from 'react';
import { Waves } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Waves className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-4xl font-bold text-red-500 mb-2">
        Região Integrada Vale do Rio Doce
      </h1>
    </div>
  );
};
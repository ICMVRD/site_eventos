import React from 'react';
import { Calendar } from 'lucide-react';

export const EventsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cadastro de Eventos
        </h1>
        <p className="text-lg text-gray-600">
          Selecione uma categoria de evento no menu acima para começar
        </p>
      </div>
    </div>
  );
};
import React from 'react';
import { ParticipantInputs } from '../types/seminar';

interface ParticipantSectionProps {
  title: string;
  values: ParticipantInputs;
  onChange: (field: keyof ParticipantInputs, value: string) => void;
}

export const ParticipantSection: React.FC<ParticipantSectionProps> = ({
  title,
  values,
  onChange,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bebês
          </label>
          <input
            type="number"
            min="0"
            value={values.babies}
            onChange={(e) => onChange('babies', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Crianças
          </label>
          <input
            type="number"
            min="0"
            value={values.children}
            onChange={(e) => onChange('children', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Intermediários
          </label>
          <input
            type="number"
            min="0"
            value={values.intermediates}
            onChange={(e) => onChange('intermediates', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adolescentes
          </label>
          <input
            type="number"
            min="0"
            value={values.teenagers}
            onChange={(e) => onChange('teenagers', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adultos
          </label>
          <input
            type="number"
            min="0"
            value={values.adults}
            onChange={(e) => onChange('adults', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
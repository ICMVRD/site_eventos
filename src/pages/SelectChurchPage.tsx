import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { SelectField } from '../components/SelectField';
import { churchData } from '../data/churchData';

export const SelectChurchPage = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPastor, setSelectedPastor] = useState('');
  const [selectedChurch, setSelectedChurch] = useState('');

  const regions = [...new Set(churchData.map(item => item.region))].sort();
  
  const pastors = selectedRegion 
    ? [...new Set(churchData.filter(item => item.region === selectedRegion).map(item => item.pastor))].sort()
    : [];

  const churches = selectedPastor
    ? churchData.filter(item => item.pastor === selectedPastor).map(item => item.church).sort()
    : [];

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedPastor('');
    setSelectedChurch('');
  };

  const handlePastorChange = (pastor: string) => {
    setSelectedPastor(pastor);
    setSelectedChurch('');
  };

  const handleSubmit = () => {
    if (selectedRegion && selectedPastor && selectedChurch) {
      // Store selections in localStorage
      localStorage.setItem('selectedRegion', selectedRegion);
      localStorage.setItem('selectedPastor', selectedPastor);
      localStorage.setItem('selectedChurch', selectedChurch);
      
      navigate('/eventos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            CADASTRO DE EVENTOS
          </h2>

          <div className="space-y-6">
            <SelectField
              label="ESCOLHA SUA MICRO REGIÃO"
              value={selectedRegion}
              onChange={handleRegionChange}
              options={regions}
            />

            <SelectField
              label="PASTOR"
              value={selectedPastor}
              onChange={handlePastorChange}
              options={pastors}
              disabled={!selectedRegion}
            />

            <SelectField
              label="IGREJAS"
              value={selectedChurch}
              onChange={setSelectedChurch}
              options={churches}
              disabled={!selectedPastor}
            />

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handleSubmit}
                disabled={!selectedRegion || !selectedPastor || !selectedChurch}
                className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                ENTRAR
              </button>
              
              <a href="/admin" className="text-gray-600 hover:text-gray-900 font-medium">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
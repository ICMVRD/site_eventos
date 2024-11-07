import { useLocation } from 'react-router-dom';

interface ChurchContext {
  selectedRegion: string;
  selectedPastor: string;
  selectedChurch: string;
}

export const useChurchContext = (): ChurchContext => {
  return {
    selectedRegion: localStorage.getItem('selectedRegion') || '',
    selectedPastor: localStorage.getItem('selectedPastor') || '',
    selectedChurch: localStorage.getItem('selectedChurch') || ''
  };
};
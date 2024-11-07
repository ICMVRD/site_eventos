import React, { createContext, useContext, ReactNode } from 'react';

interface ChurchContextType {
  selectedRegion: string;
  selectedPastor: string;
  selectedChurch: string;
}

const ChurchContext = createContext<ChurchContextType | undefined>(undefined);

export const ChurchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const selectedRegion = localStorage.getItem('selectedRegion') || '';
  const selectedPastor = localStorage.getItem('selectedPastor') || '';
  const selectedChurch = localStorage.getItem('selectedChurch') || '';

  return (
    <ChurchContext.Provider value={{ selectedRegion, selectedPastor, selectedChurch }}>
      {children}
    </ChurchContext.Provider>
  );
};

export const useChurchContext = () => {
  const context = useContext(ChurchContext);
  if (context === undefined) {
    throw new Error('useChurchContext must be used within a ChurchProvider');
  }
  return context;
};
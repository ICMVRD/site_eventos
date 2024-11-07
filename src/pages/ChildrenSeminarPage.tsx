import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { useChurchContext } from '../context/ChurchContext';
import { saveSeminarData } from '../services/seminarService';
import { generatePDF } from '../services/pdfService';
import { ParticipantSection } from '../components/ParticipantSection';

interface ParticipantData {
  babies: number;
  children: number;
  intermediates: number;
  teenagers: number;
  adults: number;
}

export const ChildrenSeminarPage = () => {
  const { selectedRegion, selectedPastor, selectedChurch } = useChurchContext();
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [members, setMembers] = useState<ParticipantData>({
    babies: 0,
    children: 0,
    intermediates: 0,
    teenagers: 0,
    adults: 0
  });
  const [visitors, setVisitors] = useState<ParticipantData>({
    babies: 0,
    children: 0,
    intermediates: 0,
    teenagers: 0,
    adults: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedChurch) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save data to Firestore using the service
      const result = await saveSeminarData({
        date,
        region: selectedRegion,
        pastor: selectedPastor,
        church: selectedChurch,
        members,
        visitors
      });

      if (result.success) {
        // Generate PDF for download
        const pdfBlob = await generatePDF({
          date,
          region: selectedRegion,
          pastor: selectedPastor,
          church: selectedChurch,
          members,
          visitors,
          createdAt: new Date()
        });

        // Create download link for PDF
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `relatorio_${selectedChurch}_${date}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert(`Seminário de crianças da igreja ${selectedChurch} salvo com sucesso!`);
        
        // Reset form
        setDate('');
        setMembers({
          babies: 0,
          children: 0,
          intermediates: 0,
          teenagers: 0,
          adults: 0
        });
        setVisitors({
          babies: 0,
          children: 0,
          intermediates: 0,
          teenagers: 0,
          adults: 0
        });
      }
    } catch (error) {
      console.error('Error saving seminar:', error);
      alert('Erro ao salvar os dados. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Seminário de Crianças
        </h1>
        <div className="text-gray-600">
          <p>Região: {selectedRegion}</p>
          <p>Pastor: {selectedPastor}</p>
          <p>Igreja: {selectedChurch}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-lg shadow-xl p-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data do Seminário
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <ParticipantSection
          title="Participantes Membros"
          values={members}
          onChange={(field, value) => setMembers(prev => ({
            ...prev,
            [field]: parseInt(value) || 0
          }))}
        />

        <ParticipantSection
          title="Participantes Visitantes"
          values={visitors}
          onChange={(field, value) => setVisitors(prev => ({
            ...prev,
            [field]: parseInt(value) || 0
          }))}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Registro'}
        </button>
      </form>
    </div>
  );
};
import { jsPDF } from 'jspdf';
import { format } from 'date-fns';

interface SeminarData {
  date: string;
  region: string;
  pastor: string;
  church: string;
  members: {
    babies: number;
    children: number;
    intermediates: number;
    teenagers: number;
    adults: number;
  };
  visitors: {
    babies: number;
    children: number;
    intermediates: number;
    teenagers: number;
    adults: number;
  };
  createdAt: Date;
}

export const generatePDF = async (data: SeminarData): Promise<Blob> => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();

  // Header
  pdf.setFontSize(16);
  pdf.text('Relatório de Seminário de Crianças', pageWidth / 2, 20, { align: 'center' });

  // Church Info
  pdf.setFontSize(12);
  pdf.text(`Igreja: ${data.church}`, 20, 40);
  pdf.text(`Pastor: ${data.pastor}`, 20, 50);
  pdf.text(`Região: ${data.region}`, 20, 60);
  pdf.text(`Data: ${format(new Date(data.date), 'dd/MM/yyyy')}`, 20, 70);

  // Participants
  pdf.text('Participantes Membros:', 20, 90);
  Object.entries(data.members).forEach(([key, value], index) => {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    pdf.text(`${label}: ${value}`, 30, 100 + (index * 10));
  });

  pdf.text('Participantes Visitantes:', 120, 90);
  Object.entries(data.visitors).forEach(([key, value], index) => {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    pdf.text(`${label}: ${value}`, 130, 100 + (index * 10));
  });

  return pdf.output('blob');
};
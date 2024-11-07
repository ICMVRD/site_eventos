import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface SeminarData {
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
}

export const saveSeminarData = async (data: SeminarData) => {
  try {
    // Ensure all number fields are actually numbers
    const sanitizedData = {
      ...data,
      members: {
        babies: Number(data.members.babies),
        children: Number(data.members.children),
        intermediates: Number(data.members.intermediates),
        teenagers: Number(data.members.teenagers),
        adults: Number(data.members.adults)
      },
      visitors: {
        babies: Number(data.visitors.babies),
        children: Number(data.visitors.children),
        intermediates: Number(data.visitors.intermediates),
        teenagers: Number(data.visitors.teenagers),
        adults: Number(data.visitors.adults)
      }
    };

    const docRef = await addDoc(collection(db, 'seminars'), sanitizedData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving seminar data:', error);
    throw error;
  }
};
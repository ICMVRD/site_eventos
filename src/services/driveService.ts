import { google } from 'googleapis';
import { format } from 'date-fns';

const FOLDER_ID = '12Wd6Q9jZ6FFvc3QoqTaZ66Mq288LDOoD';

export const uploadToGoogleDrive = async (
  file: File,
  church: string,
  pastor: string,
  photoNumber: number
): Promise<string> => {
  const timestamp = format(new Date(), 'yyyyMMdd_HHmmss');
  const fileName = `foto${String(photoNumber).padStart(2, '0')}_${church}_${pastor}`;
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('filename', fileName);
  formData.append('folderId', FOLDER_ID);

  try {
    const response = await fetch('/api/upload-to-drive', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to upload to Google Drive');
    }

    const data = await response.json();
    return data.fileId;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw error;
  }
};
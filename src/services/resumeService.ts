// Resume Service for managing custom uploaded PDF resumes & external resume links

const STORAGE_KEY_RESUME_DATA = 'adarsh_custom_resume_data';
const STORAGE_KEY_RESUME_NAME = 'adarsh_custom_resume_name';
const STORAGE_KEY_RESUME_URL = 'adarsh_custom_resume_url';

export interface CustomResumeState {
  hasCustomResume: boolean;
  fileName: string | null;
  fileDataUrl: string | null;
  customUrl: string | null;
}

export function getStoredResume(): CustomResumeState {
  try {
    const fileDataUrl = localStorage.getItem(STORAGE_KEY_RESUME_DATA);
    const fileName = localStorage.getItem(STORAGE_KEY_RESUME_NAME);
    const customUrl = localStorage.getItem(STORAGE_KEY_RESUME_URL);

    if (fileDataUrl) {
      return {
        hasCustomResume: true,
        fileName: fileName || 'Adarsh_Prasad_Singh_Resume.pdf',
        fileDataUrl,
        customUrl: null,
      };
    }

    if (customUrl) {
      return {
        hasCustomResume: true,
        fileName: fileName || 'Adarsh_Prasad_Singh_Resume.pdf',
        fileDataUrl: null,
        customUrl,
      };
    }
  } catch (e) {
    console.error('Error reading stored resume:', e);
  }

  return {
    hasCustomResume: false,
    fileName: null,
    fileDataUrl: null,
    customUrl: null,
  };
}

export async function saveCustomResumeFile(file: File): Promise<CustomResumeState> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const result = reader.result as string;
        localStorage.setItem(STORAGE_KEY_RESUME_DATA, result);
        localStorage.setItem(STORAGE_KEY_RESUME_NAME, file.name);
        localStorage.removeItem(STORAGE_KEY_RESUME_URL);

        resolve({
          hasCustomResume: true,
          fileName: file.name,
          fileDataUrl: result,
          customUrl: null,
        });
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export function saveCustomResumeUrl(url: string, name?: string): CustomResumeState {
  const finalName = name || 'Adarsh_Prasad_Singh_Resume.pdf';
  localStorage.setItem(STORAGE_KEY_RESUME_URL, url);
  localStorage.setItem(STORAGE_KEY_RESUME_NAME, finalName);
  localStorage.removeItem(STORAGE_KEY_RESUME_DATA);

  return {
    hasCustomResume: true,
    fileName: finalName,
    fileDataUrl: null,
    customUrl: url,
  };
}

export function clearCustomResume(): void {
  localStorage.removeItem(STORAGE_KEY_RESUME_DATA);
  localStorage.removeItem(STORAGE_KEY_RESUME_NAME);
  localStorage.removeItem(STORAGE_KEY_RESUME_URL);
}

import { create } from 'zustand';
import { ImagePickerResponse } from 'react-native-image-picker';

interface GalleryState {
  imagesToDelete: string[];
  response?: ImagePickerResponse | null;
  addImageToDelete: (img: string) => void;
  setResponse: (resp: ImagePickerResponse) => void;
  clearResponse: () => void;
  clearImagesToDelete: () => void;
}

export const useGalleryStore = create<GalleryState>()((set, get) => ({
  imagesToDelete: [],
  response: undefined,
  addImageToDelete: (img: string) => {
    const current = get().imagesToDelete;
    if (!current.includes(img)) {
      set({ imagesToDelete: [...current, img] });
    }
  },
  setResponse: (resp) => set({ response: resp }),
  clearImagesToDelete: () => set({ imagesToDelete: [] }),
  clearResponse: () => set({ response: null }),
}));

import { create } from 'zustand';
import { ImagePickerResponse } from 'react-native-image-picker';

interface GalleryState {
  response?: ImagePickerResponse | null;
  setResponse: (resp: ImagePickerResponse) => void;
  clearResponse: () => void;
}

export const useGalleryStore = create<GalleryState>()((set) => ({
  response: undefined,
  setResponse: (resp) => set({ response: resp }),
  clearResponse: () => set({ response: null }),
}));

import { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { ProductImage } from '../../core/entities';
import { usePlaceStore } from '../../store';

interface Props {
  images: ProductImage[];
  onUpdateImages: (updated: ProductImage[]) => void;
}

export const useProductGalleryItemListData = ({ images, onUpdateImages }: Props) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const place = usePlaceStore(store => store.place);
  const [productImages, setProductImages] = useState<ProductImage[]>(images);

  useEffect(() => {
    if (images.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [images, scrollViewRef]);

  const handleSetMain = (imgUrl: string) => {
    const updated = productImages.map(img => ({
      ...img,
      main: img.img === imgUrl,
    }));

    setProductImages(updated);
    if (onUpdateImages) {
      onUpdateImages(updated);
    }
  };

  return {
    place,
    productImages,
    scrollViewRef,
    handleSetMain,
  };
};

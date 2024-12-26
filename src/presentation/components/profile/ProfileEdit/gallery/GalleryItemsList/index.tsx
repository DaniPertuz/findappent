import React, { FC, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import GalleryItem from '../GalleryItem';

interface Props {
  placeImages: string[];
  removeImage: (index: number) => void;
}

const GalleryItemsList: FC<Props> = ({ placeImages, removeImage }) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (placeImages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [placeImages]);

  return (
    <ScrollView horizontal ref={scrollViewRef} showsHorizontalScrollIndicator={false}>
      {placeImages.map((image, index) => (
        <GalleryItem key={index} uri={image} onPress={() => removeImage(index)} />
      ))}
    </ScrollView>
  );
};

export default GalleryItemsList;

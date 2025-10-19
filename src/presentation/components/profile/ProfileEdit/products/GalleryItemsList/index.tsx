import React, { FC, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AddEditButton } from '../../../../ui';
import { usePlaceStore } from '../../../../../../store';
import GalleryItem from '../GalleryItem';

interface Props {
  images: string[];
  removeImage: (index: number) => void;
  onAddImage: () => void;
  onUpdateImages?: (updated: string[]) => void;
}

const GalleryItemsList: FC<Props> = ({ images, removeImage, onAddImage }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const place = usePlaceStore(state => state.place);

  useEffect(() => {
    if (images.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [images]);

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal ref={scrollViewRef} showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          uri={image}
          onRemove={() => removeImage(index)}
        />
      ))}
      {(
        (place?.premium === 2 && images.length < 2) ||
        (place?.premium === 1 && images.length < 1) ||
        (place?.premium === 3)
      ) &&
        <AddEditButton onPress={onAddImage} />
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 10 },
});

export default GalleryItemsList;

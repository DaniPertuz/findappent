import React, { FC, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AddEditButton } from '../../../../ui';
import { usePlaceStore } from '../../../../../../store';
import GalleryItem from '../GalleryItem';

interface Props {
  placeImages: string[];
  removeImage: (index: number) => void;
  onAddImage: () => void;
}

const GalleryItemsList: FC<Props> = ({ placeImages, removeImage, onAddImage }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const place = usePlaceStore(state => state.place);

  useEffect(() => {
    if (placeImages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [placeImages]);

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal ref={scrollViewRef} showsHorizontalScrollIndicator={false}>
      {placeImages.map((image, index) => (
        <GalleryItem key={index} uri={image} onPress={() => removeImage(index)} />
      ))}
      {place?.premium === 2 && placeImages.length < 2 && <AddEditButton onPress={onAddImage} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 10 },
});

export default GalleryItemsList;

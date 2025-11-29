import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ProductImage } from '../../../../../../../core/entities';
import { useProductGalleryItemListData } from '../../../../../../hooks/useProductGalleryItemListData';
import { AddEditButton } from '../../../../../ui';
import GalleryItem from '../GalleryItem';

interface Props {
  images: (ProductImage | string)[];
  removeImage: (index: number) => void;
  onAddImage: () => void;
  onUpdateImages?: (updated: ProductImage[]) => void;
}

const GalleryItemsList: FC<Props> = ({ images, removeImage, onAddImage, onUpdateImages }) => {
  const imgsArray: ProductImage[] = images.map(item =>
    typeof item === 'string'
      ? { img: item, main: false }
      : item
  );
  const { place, productImages, scrollViewRef, handleSetMain } = useProductGalleryItemListData({ images: imgsArray as unknown as ProductImage[], onUpdateImages: onUpdateImages ?? (() => { }) });

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal ref={scrollViewRef} showsHorizontalScrollIndicator={false}>
      {productImages.map((image, index) => (
        <GalleryItem
          key={`${image.img}-${index}`}
          productImage={image}
          onSetMain={() => handleSetMain(image.img)}
          onRemove={() => removeImage(index)}
        />
      ))}
      {(
        (place?.premium === 2 && images.length < 2) ||
        (place?.premium === 1 && images.length < 1) ||
        (place?.premium === 3)
      ) && <AddEditButton onPress={onAddImage} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  item: { flexDirection: 'row' },
});

export default GalleryItemsList;

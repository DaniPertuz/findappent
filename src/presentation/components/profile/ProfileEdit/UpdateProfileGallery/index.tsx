import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useGallery } from '../../../../hooks/useGallery';
import { AddEditButton, Caption2 } from '../../../ui';
import GalleryItemsList from '../gallery/GalleryItemsList';
import GalleryLoadingModal from '../gallery/GalleryLoadingModal';
import UpdateProfileFormItemContainer from '../UpdateProfileFormItemContainer';
import { ThemeContext } from '../../../../theme/ThemeContext';

const UpdateProfileGallery: FC = () => {
  const { colors } = useContext(ThemeContext);
  const { addGalleryPic, addGalleryPics, loading, placeImages, setPlaceImages } = useGallery();
  const isGalleryEmpty = placeImages.length === 0;

  const removeImage = (index: number) => {
    setPlaceImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleAddImage = () => {
    addGalleryPics(100);
  };

  return (
    <UpdateProfileFormItemContainer>
      <Caption2 customColor={colors.mainText}>Imágenes</Caption2>
      <View style={styles.container}>
        {isGalleryEmpty && <AddEditButton onPress={handleAddImage} />}
        <GalleryItemsList placeImages={placeImages} removeImage={removeImage} />
        <GalleryLoadingModal loading={loading} />
      </View>
    </UpdateProfileFormItemContainer>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 15 },
});

export default UpdateProfileGallery;

import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useGallery } from '../../../../hooks/useGallery';
import { WarningMessage } from '../../../auth';
import { Caption2 } from '../../../ui';
import GalleryItemsList from '../gallery/GalleryItemsList';
import GalleryLoadingModal from '../gallery/GalleryLoadingModal';
import GalleryQueryModal from '../gallery/GalleryQueryModal';
import FormItemContainer from '../FormItemContainer';
import { useGalleryStore, usePlaceStore } from '../../../../../store';
import { ThemeContext } from '../../../../theme/ThemeContext';

const UpdateProfileGallery: FC = () => {
  const { colors } = useContext(ThemeContext);
  const { addGalleryPics, addPhoto, loading, placeImages, setPlaceImages } = useGallery();
  const place = usePlaceStore(state => state.place);
  const { addImageToDelete } = useGalleryStore();
  const diff = (place?.premium === 1 ? 1 : 2) - placeImages.length;
  const amount = place?.premium === 1
    ? 1
    : place?.premium === 2
      ? Math.max(diff, 0)
      : 100;
  const [modalVisible, setModalVisible] = useState(false);

  const removeImage = (index: number) => {
    addImageToDelete(placeImages[index]);
    setPlaceImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleAddImage = () => {
    setModalVisible(true);
  };

  return (
    <>
      <FormItemContainer>
        <Caption2 customColor={colors.mainText}>Imágenes</Caption2>
        <View style={styles.container}>
          <GalleryItemsList placeImages={placeImages} removeImage={removeImage} onAddImage={handleAddImage} />
          <GalleryLoadingModal loading={loading} />
        </View>
        {place?.premium === 2 && placeImages.length < 2 && <WarningMessage text={`Puede agregar ${diff === 1 ? 'una imagen' : 'hasta 2 imágenes'}`} />}
      </FormItemContainer>
      <GalleryQueryModal addGalleryPics={() => addGalleryPics(amount)} addPhoto={addPhoto} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 15 },
});

export default UpdateProfileGallery;

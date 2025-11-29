import React, { FC, useContext } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ModalProps } from '../../../../../../../interfaces/modal-props.interface';
import { deviceHeight } from '../../../../../../../utils/dimensions';
import { ModalHeader } from '../../../../../ui';
import GalleryButton from './GalleryButton';
import { ThemeContext } from '../../../../../../theme/ThemeContext';

interface Props extends ModalProps {
  addPhoto: () => void;
  addGalleryPics: (value: number) => void;
}

const GalleryQueryModal: FC<Props> = ({ modalVisible, addGalleryPics, addPhoto, setModalVisible }) => {
  const { colors } = useContext(ThemeContext);

  const handleGalleryPics = () => {
    addGalleryPics(100);
    setModalVisible!(false);
  };

  const handlePhoto = () => {
    addPhoto();
    setModalVisible!(false);
  };

  return (
    <Modal
      animationType={'none'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible!(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={[{ backgroundColor: colors.white }, styles.container]}>
          <ModalHeader closeIcon={'close'} title={'Imágenes...'} onPress={() => setModalVisible!(false)} />
          <View style={styles.buttonsContainer}>
            <GalleryButton galleryType={'gallery'} onPress={handleGalleryPics} />
            <GalleryButton galleryType={'camera'} onPress={handlePhoto} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: deviceHeight * 0.2,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
});

export default GalleryQueryModal;

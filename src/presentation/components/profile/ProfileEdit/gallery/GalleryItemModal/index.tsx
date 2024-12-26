import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ModalHeader from '../../../../dashboard/DashboardReviewsModal/ModalHeader';
import ItemImage from './ItemImage';

interface Props {
  uri: string;
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const GalleryItemModal: FC<Props> = ({ modalVisible, uri, setModalVisible }) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <ModalHeader closeIcon={'close'} onPress={() => setModalVisible(false)} />
        <ItemImage uri={uri} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GalleryItemModal;

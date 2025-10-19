import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ModalProps } from '../../../../../../interfaces/modal-props.interface';
import { ModalHeader } from '../../../../ui';
import ItemImage from './ItemImage';

const GalleryItemModal: FC<ModalProps> = ({ modalVisible, uri, setModalVisible }) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible!(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <ModalHeader closeIcon={'close'} onPress={() => setModalVisible!(false)} />
        <ItemImage uri={uri!} />
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

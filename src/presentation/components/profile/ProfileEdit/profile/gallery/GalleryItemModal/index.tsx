import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ModalProps } from '../../../../../../../interfaces/modal-props.interface';
import { ModalHeader } from '../../../../../ui';
import ItemImage from './ItemImage';

const GalleryItemModal: FC<ModalProps & { main?: boolean, onSetMain: (uri: string) => void; }> = ({ main, modalVisible, uri, onSetMain, setModalVisible }) => {
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
        <View style={styles.headerContainer}>
          <ModalHeader
            main={main}
            uri={uri}
            closeIcon={'close'}
            onSetMain={onSetMain}
            onPress={() => setModalVisible!(false)}
          />
        </View>
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
  headerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GalleryItemModal;

import React, { FC } from 'react';
import { Modal } from 'react-native';
import ModalHeader from './ModalHeader';
import ModalContainer from './ModalContainer';
import ReviewsList from '../reviews/ReviewsList';

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const DashboardReviewsModal: FC<Props> = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <ModalContainer>
        <ModalHeader onPress={() => setModalVisible(false)} />
        <ReviewsList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} />
      </ModalContainer>
    </Modal>
  );
};

export default DashboardReviewsModal;

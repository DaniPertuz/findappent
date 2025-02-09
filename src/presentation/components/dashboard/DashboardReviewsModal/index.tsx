import React, { FC } from 'react';
import { Modal } from 'react-native';
import { ModalProps } from '../../../../interfaces/modal-props.interface';
import ModalHeader from './ModalHeader';
import ModalContainer from './ModalContainer';
import ReviewsList from '../reviews/ReviewsList';

const DashboardReviewsModal: FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible!(!modalVisible);
      }}
    >
      <ModalContainer>
        <ModalHeader closeIcon={'down'} onPress={() => setModalVisible!(false)} />
        <ReviewsList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} />
      </ModalContainer>
    </Modal>
  );
};

export default DashboardReviewsModal;

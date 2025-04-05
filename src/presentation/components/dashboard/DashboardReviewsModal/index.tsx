import React, { FC } from 'react';
import { Modal } from 'react-native';
import { ModalProps } from '../../../../interfaces/modal-props.interface';
import { usePlaceData } from '../../../hooks/usePlaceData';
import { ModalHeader } from '../../ui';
import ReviewsList from '../reviews/ReviewsList';
import ModalContainer from './ModalContainer';

const DashboardReviewsModal: FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
  const { ratings } = usePlaceData();
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
        <ReviewsList data={ratings.ratings} />
      </ModalContainer>
    </Modal>
  );
};

export default DashboardReviewsModal;

import React, { FC } from 'react';
import { Modal } from 'react-native';
import SubscriptionPaymentWebView from '../SubscriptionPaymentWebView';

interface Props {
  checkoutUrl: string;
  closeModal: () => void;
  onPaymentSuccess: () => void;
}

const SubscriptionPaymentModal: FC<Props> = ({ checkoutUrl, closeModal, onPaymentSuccess }) => {
  return (
    <Modal visible={!!checkoutUrl} animationType="slide">
      {checkoutUrl && (
        <SubscriptionPaymentWebView
          checkoutUrl={checkoutUrl}
          onSuccess={() => {
            onPaymentSuccess();
            closeModal();
          }}
          onCancel={closeModal}
        />
      )}
    </Modal>
  );
};

export default SubscriptionPaymentModal;

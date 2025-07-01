import React, { FC } from 'react';
import WebView from 'react-native-webview';
import { LoadingScreen } from '../../../screens';

interface Props {
  checkoutUrl: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const SubscriptionPaymentWebView: FC<Props> = ({ checkoutUrl, onCancel, onSuccess }) => {
  return (
    <WebView
      source={{ uri: checkoutUrl }}
      startInLoadingState
      renderLoading={() => <LoadingScreen />}
      onNavigationStateChange={(event) => {
        if (event.url.includes('/api/payments/success')) {
          onSuccess();
        }

        if (event.url.includes('/api/payments/cancel')) {
          onCancel();
        }
      }}
    />
  );
};

export default SubscriptionPaymentWebView;

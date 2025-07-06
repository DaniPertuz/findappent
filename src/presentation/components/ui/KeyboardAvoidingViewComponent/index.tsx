import React, { FC, PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { appStyles } from '../../../theme/app-styles';

const KeyboardAvoidingViewComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <KeyboardAvoidingView style={appStyles.keyboardContainer} behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewComponent;

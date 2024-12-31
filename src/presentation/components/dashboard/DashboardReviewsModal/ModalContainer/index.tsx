import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { deviceHeight } from '../../../../../utils/dimensions';

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.modalOverlay}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    height: deviceHeight * 0.9,
    paddingTop: deviceHeight * 0.1,
  },
});

export default ModalContainer;

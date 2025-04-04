import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const PictureContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.modalOverlay}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default PictureContainer;

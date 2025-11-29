import React, { FC, useContext } from 'react';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../../../theme/ThemeContext';

const GalleryLoadingModal: FC<{ loading: boolean; }> = ({ loading }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Modal visible={loading} transparent>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.darkBlue} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default GalleryLoadingModal;

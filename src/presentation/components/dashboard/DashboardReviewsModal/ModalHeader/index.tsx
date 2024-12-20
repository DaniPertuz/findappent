import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalHideButton from '../ModalHideButton';
import ModalTitle from '../ModalTitle';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ModalHeader: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.background }, styles.modalContainer]}>
      <ModalHideButton onPress={onPress} />
      <ModalTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    paddingEnd: 40,
    paddingStart: 20,
    paddingVertical: 20,
  },
});

export default ModalHeader;

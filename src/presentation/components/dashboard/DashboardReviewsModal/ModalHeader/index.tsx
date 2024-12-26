import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ModalProps } from '../../../../../interfaces/modal-props.interface';
import ModalHideButton from '../ModalHideButton';
import ModalTitle from '../ModalTitle';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ModalHeader: FC<ModalProps> = ({ closeIcon, hasTitle, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.background }, styles.modalContainer]}>
      <ModalHideButton closeIcon={closeIcon} onPress={onPress} />
      {hasTitle && <ModalTitle />}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default ModalHeader;

import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body } from '../../../ui/Body';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ModalTitle: FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Body customColor={colors.mainText}>Opiniones</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
});

export default ModalTitle;

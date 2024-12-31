import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Body from '../../../ui/Body';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ModalTitle: FC<{ title: string; }> = ({ title }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Body customColor={colors.mainText}>{title}</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', position: 'absolute', left: 0, right: 0 },
});

export default ModalTitle;

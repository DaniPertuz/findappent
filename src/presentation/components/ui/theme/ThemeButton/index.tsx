import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Caption1 from '../../Caption1';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ThemeButton: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Caption1 customColor={colors.mainText}>Tema</Caption1>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default ThemeButton;

import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Caption1 from '../../Caption1';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  text: string;
  onPress: () => void;
}

const ThemeModalButton: FC<Props> = ({ text, onPress }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <Pressable
      style={[styles.button,
      { backgroundColor: colors.white },
      currentTheme === 'dark' && { borderColor: colors.brandWhite, ...styles.border },
      ]}
      onPress={onPress}
    >
      <Caption1 customColor={colors.mainText}>{text}</Caption1>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginHorizontal: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  border: { borderWidth: 1 },
});

export default ThemeModalButton;

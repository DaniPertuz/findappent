import React, { FC, useContext } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  onPress?: () => void;
}

const BackButton: FC<Props> = ({ onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <Image
        style={styles.iconSize}
        source={{ uri: getIconUrl('back', currentTheme, true) }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconSize: { height: 25, width: 25 },
});

export default BackButton;

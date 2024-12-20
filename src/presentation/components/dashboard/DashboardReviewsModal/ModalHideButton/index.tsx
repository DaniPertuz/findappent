import React, { FC, useContext } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../../utils/icon-url';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  onPress: () => void;
}

const ModalHideButton: FC<Props> = ({ onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: getIconUrl('down', currentTheme, true) }} style={styles.size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  size: {
    height: 24,
    width: 24,
  },
});

export default ModalHideButton;

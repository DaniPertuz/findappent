import React, { FC, useContext } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../../utils/icon-url';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  closeIcon: string;
  onPress: () => void;
}

const ModalHideButton: FC<Props> = ({ closeIcon, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: getIconUrl(closeIcon, currentTheme, true) }} style={styles.size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  size: {
    height: 24,
    width: 24,
  },
});

export default ModalHideButton;

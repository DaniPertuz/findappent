import React, { FC, useContext } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  edit?: boolean;
  onPress?: () => void;
}

const AddEditButton: FC<Props> = ({ edit, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <Image
        style={styles.iconSize}
        source={{ uri: getIconUrl(edit ? 'edit' : 'camera-plus', currentTheme, true) }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconSize: { height: 30, padding: 10, width: 30 },
});

export default AddEditButton;

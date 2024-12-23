import React, { FC, useContext } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { getIconUrl } from '../../../../../utils/icon-url';

const ProfilePicture: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: getIconUrl('fa_blue', currentTheme, false) }} style={styles.picture} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  picture: {
    borderRadius: 50,
    height: 97,
    width: 97,
  },
});

export default ProfilePicture;

import React, { FC, useContext } from 'react';
import { Image, ImageStyle, Pressable, StyleProp } from 'react-native';
import { getIconUrl } from '../../../../../utils/icon-url';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  photoUri: string;
  onPress?: () => void;
  styles: StyleProp<ImageStyle>;
}

const ProfilePicture: FC<Props> = ({ photoUri, onPress, styles }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: photoUri ?? getIconUrl('fa_blue', currentTheme, false) }} style={styles} />
    </Pressable>
  );
};

export default ProfilePicture;

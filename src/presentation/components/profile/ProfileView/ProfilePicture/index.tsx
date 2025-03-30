import React, { FC, useContext } from 'react';
import { Image, ImageStyle, Pressable, StyleProp } from 'react-native';
import { useAuthStore } from '../../../../../store/authStore';
import { getIconUrl } from '../../../../../utils/icon-url';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  onPress?: () => void;
  styles: StyleProp<ImageStyle>;
}

const ProfilePicture: FC<Props> = ({ onPress, styles }) => {
  const { currentTheme } = useContext(ThemeContext);
  const user = useAuthStore(state => state.authResponse.user);
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: user?.photo ?? getIconUrl('fa_blue', currentTheme, false) }} style={styles} />
    </Pressable>
  );
};

export default ProfilePicture;

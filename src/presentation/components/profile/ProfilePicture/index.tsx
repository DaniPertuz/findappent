import React, { FC } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { CLOUDINARY_URL } from '../../../../api/cloudinaryIconsAPI';

const ProfilePicture: FC<{ onPress: () => void; }> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: `${CLOUDINARY_URL}/fa_blue` }} style={styles.picture} />
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

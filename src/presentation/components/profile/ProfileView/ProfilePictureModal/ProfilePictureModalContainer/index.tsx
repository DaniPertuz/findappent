import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfilePictureModalContainer: FC<{ profileImagePath: any; }> = ({ profileImagePath }) => {
  return (
    <Image
      source={profileImagePath}
      style={styles.userPhoto}
    />
  );
};

const styles = StyleSheet.create({
  userPhoto: {
    borderRadius: 20,
    height: 450,
    width: 350,
  },
});

export default ProfilePictureModalContainer;

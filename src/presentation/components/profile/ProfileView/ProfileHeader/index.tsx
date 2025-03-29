import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import ProfileHeaderTitle from '../ProfileHeaderTitle';

const ProfileHeader: FC = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture styles={styles.picture} />
      <ProfileHeaderTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  picture: {
    borderRadius: 50,
    height: 97,
    width: 97,
  },
});

export default ProfileHeader;

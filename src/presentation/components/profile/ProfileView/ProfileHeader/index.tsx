import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import ProfileHeaderTitle from '../ProfileHeaderTitle';

const ProfileHeader: FC = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture onPress={() => {}} />
      <ProfileHeaderTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
});

export default ProfileHeader;

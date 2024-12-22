import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import ProfileHeaderTitle from '../ProfileHeaderTitle';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture onPress={() => {}} />
      <ProfileHeaderTitle name={'Restaurante Las Rocas'} email={'manager@lasrocas.com'} />
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

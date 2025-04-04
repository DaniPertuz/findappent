import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const ProfilePictureButtonsContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    padding: 10,
  },
});

export default ProfilePictureButtonsContainer;

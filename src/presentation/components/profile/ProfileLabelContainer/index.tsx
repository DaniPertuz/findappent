import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const ProfileLabelContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
});

export default ProfileLabelContainer;

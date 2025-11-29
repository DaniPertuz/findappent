import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const UpdateProfileHeaderContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
});

export default UpdateProfileHeaderContainer;

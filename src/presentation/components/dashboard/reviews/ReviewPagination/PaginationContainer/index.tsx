import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

const PaginationContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.paginationContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', padding: 20 },
});

export default PaginationContainer;

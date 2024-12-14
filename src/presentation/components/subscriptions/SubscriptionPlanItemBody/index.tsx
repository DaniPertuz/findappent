import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const SubscriptionPlanItemBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10, marginTop: 12 },
});

export default SubscriptionPlanItemBody;

import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuthStore } from '../../../../store/authStore';
import { H3 } from '../../ui';
import SubscriptionBadge from '../SubscriptionBadge';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionHeader: FC = () => {
  const { colors } = useContext(ThemeContext);
  const user = useAuthStore(state => state.authResponse.user);
  return (
    <View style={styles.container}>
      <H3 customColor={colors.mainText}>{user?.name}</H3>
      <SubscriptionBadge level={'3'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginHorizontal: 20,
    marginTop: 40,
  },
});

export default SubscriptionHeader;

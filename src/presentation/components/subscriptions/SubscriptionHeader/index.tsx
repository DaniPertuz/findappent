import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SubscriptionBadge from '../SubscriptionBadge';
import { H3 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionHeader: FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <H3 customColor={colors.mainText}>Restaurante Las Rocas</H3>
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

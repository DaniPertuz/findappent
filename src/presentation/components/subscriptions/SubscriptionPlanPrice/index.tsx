import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Caption2 } from '../../ui';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionPlanPrice: FC<{ price: string; }> = ({ price }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Image source={{ uri: getIconUrl('money', currentTheme, true) }} style={styles.subscriptionIcon} />
      <Caption2 customColor={colors.gray}>{price}/Mensuales</Caption2>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', gap: 5 },
  subscriptionIcon: { height: 15, width: 15 },
});

export default SubscriptionPlanPrice;

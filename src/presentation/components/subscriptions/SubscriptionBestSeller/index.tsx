import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption2 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionBestSeller = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.lightBlue }]}>
      <Caption2 customColor={colors.brandWhite}>Best Seller</Caption2>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    position: 'absolute',
    left: 180,
    top: 0,
    transform: [{ rotate: '35deg' }],
    width: 250,
  },
});

export default SubscriptionBestSeller;

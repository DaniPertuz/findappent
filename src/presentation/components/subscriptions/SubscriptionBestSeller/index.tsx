import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption2 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionBestSeller: FC = () => {
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
    borderRadius: 0,
    paddingHorizontal: 55,
    paddingVertical: 10,
    transform: [{ rotate: '45deg' }],
  },
});

export default SubscriptionBestSeller;

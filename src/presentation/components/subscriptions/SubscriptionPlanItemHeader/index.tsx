import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Subheadline } from '../../ui';
import SubscriptionBadge from '../SubscriptionBadge';
import SubscriptionBestSeller from '../SubscriptionBestSeller';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  level: string;
  text: string;
}

const SubscriptionPlanItemHeader: FC<Props> = ({ level, text }) => {
  const { colors } = useContext(ThemeContext);
  const customJustify = level === '3' ? 'space-between' : 'flex-start';
  return (
    <View style={[styles.container, { justifyContent: customJustify }]}>
      <SubscriptionBadge level={level} />
      <Subheadline customColor={colors.mainText}>Paquete {text}</Subheadline>
      {level === '3' && <SubscriptionBestSeller />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

export default SubscriptionPlanItemHeader;

import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import SubscriptionButton from '../SubscriptionButton';
import SubscriptionPlanItemHeader from '../SubscriptionPlanItemHeader';
import SubscriptionPlanItemBody from '../SubscriptionPlanItemBody';
import SubscriptionPlanDetails from '../SubscriptionPlanDetails';
import SubscriptionPlanPrice from '../SubscriptionPlanPrice';

interface Props {
  level: string;
  levelText: string;
  price: string;
  details: string[];
}

const SubscriptionPlastListItem: FC<Props> = ({ level, levelText, price, details }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const borderBackground = {
    backgroundColor: colors.white,
    borderColor: currentTheme === 'dark' ? colors.brandWhite : colors.gray,
    borderWidth: 1,
  };
  return (
    <View style={[styles.container, borderBackground]}>
      <SubscriptionPlanItemHeader level={level} text={levelText} />
      <SubscriptionPlanItemBody>
        <SubscriptionPlanPrice price={price} />
        <SubscriptionPlanDetails details={details} />
        <SubscriptionButton />
      </SubscriptionPlanItemBody>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
  },
});

export default SubscriptionPlastListItem;

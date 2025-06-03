import React, { FC, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { usePlaceData } from '../../../hooks/usePlaceData';
import SubscriptionButton from '../SubscriptionButton';
import SubscriptionPlanItemHeader from '../SubscriptionPlanItemHeader';
import SubscriptionPlanItemBody from '../SubscriptionPlanItemBody';
import SubscriptionPlanDetails from '../SubscriptionPlanDetails';
import SubscriptionPlanPrice from '../SubscriptionPlanPrice';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  level: string;
  levelText: string;
  price: string;
  details: string[];
}

const SubscriptionPlastListItem: FC<Props> = ({ level, levelText, price, details }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const { place } = usePlaceData();
  const borderBackground = {
    backgroundColor: colors.white,
    borderColor: currentTheme === 'dark' ? colors.brandWhite : undefined,
    borderWidth: currentTheme === 'dark' ? 1 : 0,
  };

  return (
    <View style={[styles.container, borderBackground]}>
      <SubscriptionPlanItemHeader level={level} text={levelText} />
      <SubscriptionPlanItemBody>
        <SubscriptionPlanPrice price={price} />
        <SubscriptionPlanDetails details={details} />
        <SubscriptionButton text={`${place?.premium?.toString()}` === level ? 'Suscripción actual' : 'Suscribirme'} />
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

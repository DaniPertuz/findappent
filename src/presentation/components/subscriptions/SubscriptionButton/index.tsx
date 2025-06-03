import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonComponent, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionButton: FC<{ text: string; }> = ({ text }) => {
  const { colors } = useContext(ThemeContext);
  const currentSubscription = text === 'Suscripción actual';
  const subscriptionBg = currentSubscription ? colors.gray : colors.darkBlue;
  return (
    <ButtonComponent customStyle={[styles.container, { backgroundColor: subscriptionBg }]} disabled={currentSubscription} loading={false}>
      <Footnote customColor={colors.brandWhite}>{text}</Footnote>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start' },
});

export default SubscriptionButton;

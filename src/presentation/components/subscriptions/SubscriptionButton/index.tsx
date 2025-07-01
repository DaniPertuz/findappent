import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonComponent, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  loading: boolean;
  text: string;
  onPress?: () => void;
}

const SubscriptionButton: FC<Props> = ({ loading, text, onPress }) => {
  const { colors } = useContext(ThemeContext);
  const currentSubscription = text === 'Suscripción actual';
  const subscriptionBg = currentSubscription ? colors.gray : colors.darkBlue;
  return (
    <ButtonComponent customStyle={[styles.container, { backgroundColor: subscriptionBg }]} disabled={currentSubscription} loading={loading} onPress={onPress}>
      <Footnote customColor={colors.brandWhite}>{text}</Footnote>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start', height: 40, width: 135 },
});

export default SubscriptionButton;

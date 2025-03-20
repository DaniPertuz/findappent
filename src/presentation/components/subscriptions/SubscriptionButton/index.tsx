import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonComponent, Footnote } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionButton: FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <ButtonComponent customStyle={styles.container}>
      <Footnote customColor={colors.brandWhite}>Subscribirme</Footnote>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start' },
});

export default SubscriptionButton;

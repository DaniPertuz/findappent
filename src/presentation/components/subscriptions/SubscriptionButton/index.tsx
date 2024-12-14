import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonComponent } from '../../ui/ButtonComponent';
import { Footnote } from '../../ui/Footnote';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionButton = () => {
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

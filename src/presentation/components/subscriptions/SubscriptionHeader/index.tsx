import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footnote } from '../../ui/Footnote';
import { H3 } from '../../ui/H3';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionHeader = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <H3 customColor={colors.mainText}>Restaurante Las Rocas</H3>
      <Footnote customColor={colors.mainText}>Nivel 3</Footnote>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginHorizontal: 20,
    marginTop: 40,
  },
});

export default SubscriptionHeader;

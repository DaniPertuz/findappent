import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footnote } from '../../ui/Footnote';
import { Subheadline } from '../../ui/Subheadline';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  level: string;
  text: string;
}

const SubscriptionPlanItemHeader: FC<Props> = ({ level, text }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Footnote customColor={colors.mainText}>Nivel {level}</Footnote>
      <Subheadline customColor={colors.mainText}>Paquete {text}</Subheadline>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default SubscriptionPlanItemHeader;

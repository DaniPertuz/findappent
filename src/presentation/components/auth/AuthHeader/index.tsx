import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { BodySmall, H4 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  title: string;
  subtitle: string;
}

const AuthHeader: FC<Props> = ({ title, subtitle }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.labelsContainer}>
      <H4 customColor={colors.mainText}>{title}</H4>
      <BodySmall customColor={colors.mainText}>{subtitle}</BodySmall>
    </View>
  );
};

const styles = StyleSheet.create({
  labelsContainer: {
    alignSelf: 'stretch',
    gap: 5,
  },
});

export default AuthHeader;

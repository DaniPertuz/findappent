import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption1 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { deviceHeight, deviceWidth } from '../../../../../utils/dimensions';

const NoUsersLegend: FC<{ text: string }> = ({ text }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Caption1 customColor={colors.mainText}>{text}</Caption1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight / 3.5,
    width: deviceWidth * 0.9,
    padding: 15,
  },
});

export default NoUsersLegend;

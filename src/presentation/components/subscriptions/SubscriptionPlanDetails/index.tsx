import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../utils/icon-url';
import { Caption2 } from '../../ui/Caption2';
import { ThemeContext } from '../../../theme/ThemeContext';

const SubscriptionPlanDetails: FC<{ details: string[]; }> = ({ details }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      {details.map((detail, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: getIconUrl('check', currentTheme, false) }} style={styles.checkIcon} />
          <Caption2 customColor={colors.mainText}>{detail}</Caption2>
        </View>
      ))
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 10 },
  checkIcon: { marginTop: 5, height: 15, width: 15 },
});

export default SubscriptionPlanDetails;

import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { appStyles } from '../../../theme/app-styles';
import { Caption2 } from '../../ui/Caption2';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  text: string;
}

const WarningMessage: FC<Props> = ({ text }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.warningContainer}>
      <Image style={appStyles.inputIcon} source={require('../../../../assets/icons/warning.png')} />
      <Caption2 customColor={colors.error}>{text}</Caption2>
    </View>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});

export default WarningMessage;

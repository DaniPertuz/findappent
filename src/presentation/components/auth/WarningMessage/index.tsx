import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Caption2 } from '../../ui';
import { getIconUrl } from '../../../../utils/icon-url';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  text: string;
}

const WarningMessage: FC<Props> = ({ text }) => {
  const { colors, currentTheme } = useContext(ThemeContext);

  return (
    <View style={styles.warningContainer}>
      <Image
        source={{ uri: getIconUrl('warning', currentTheme, false) }}
        style={appStyles.inputIcon}
      />
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

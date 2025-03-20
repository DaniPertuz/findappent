import React, { FC, useContext } from 'react';
import { Pressable, Image, View, StyleSheet } from 'react-native';
import { Caption1 } from '../../ui';
import { getIconUrl } from '../../../../utils/icon-url';
import { appStyles } from '../../../theme/app-styles';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  onPress?: () => void;
}

const AuthBackButton: FC<Props> = ({ onPress }) => {
  const { colors, currentTheme } = useContext(ThemeContext);

  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Image source={{ uri: getIconUrl('back', currentTheme, false) }} style={appStyles.inputIcon} />
      <View style={styles.captionContainer}>
        <Caption1 customColor={colors.darkBlue}>Volver</Caption1>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    gap: 5,
  },
  captionContainer: {
    flex: 1,
  },
});

export default AuthBackButton;

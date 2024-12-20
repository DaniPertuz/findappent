import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';

export const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    inputContainer: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.mainText,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      gap: 5,
      paddingHorizontal: 16,
    },
    inputFieldContainerWhite: {
      alignItems: 'center',
      backgroundColor: colors.brandWhite,
      borderColor: colors.brandMainText,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 5,
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      fontSize: 14,
      fontWeight: '500',
      height: 60,
      lineHeight: 14,
      letterSpacing: -0.24,
      paddingHorizontal: 14,
    },
    inputIcon: {
      height: 20,
      width: 20,
    },
    underline: {
      display: 'none',
    },
    warningBorder: {
      borderColor: colors.alert,
      borderWidth: 1,
    },
  });
};

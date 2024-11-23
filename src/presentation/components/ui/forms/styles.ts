import { StyleSheet } from 'react-native';
import { useColors } from '../../../theme/colors';

export const useStyles = () => {
  const { alert, brandMainText } = useColors();

  return StyleSheet.create({
    inputContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(250, 250, 250, 1)',
      borderColor: brandMainText,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 5,
      paddingHorizontal: 16,
      width: '90%',
    },
    inputFieldContainerWhite: {
      alignItems: 'center',
      backgroundColor: 'rgba(250, 250, 250, 1)',
      borderColor: '#081023',
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 5,
      paddingHorizontal: 16,
    },
    warningBorder: {
      borderColor: alert,
      borderWidth: 1,
    },
  });
};

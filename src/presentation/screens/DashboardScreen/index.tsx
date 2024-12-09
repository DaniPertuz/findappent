import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DashboardUserProps from '../../components/dashboard/DashboardUserProps';
import StatusBarComponent from '../../components/ui/StatusBarComponent';
import { ThemeContext } from '../../theme/ThemeContext';

const DashboardScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.white} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[{ backgroundColor: colors.white }, styles.container]}>
        <DashboardHeader title={'Bienvenid@'} subtitle={'Negocio'} />
        <DashboardUserProps />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingHorizontal: 20,
  },
});

export default DashboardScreen;

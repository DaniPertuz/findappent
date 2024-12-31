import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DashboardStatistics from '../../components/dashboard/DashboardStatistics';
import DashboardUserProps from '../../components/dashboard/DashboardUserProps';
import StatusBarComponent from '../../components/ui/StatusBarComponent';
import { deviceHeight } from '../../../utils/dimensions';
import { ThemeContext } from '../../theme/ThemeContext';

const DashboardScreen = () => {
  const { colors, currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBarComponent color={colors.background} theme={currentTheme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={[{ backgroundColor: colors.background }, styles.container]}>
        <DashboardHeader title={'Bienvenid@'} subtitle={'Negocio'} />
        <DashboardUserProps />
        <DashboardStatistics />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingHorizontal: 20,
    paddingBottom: deviceHeight * 0.07,
  },
});

export default DashboardScreen;

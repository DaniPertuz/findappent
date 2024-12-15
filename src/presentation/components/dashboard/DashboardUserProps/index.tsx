import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardUserPropItem from './DashboardUserPropItem';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

const DashboardUserProps = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <DashboardUserPropItem iconUrl={getIconUrl('restaurant', currentTheme, true)} title={'Categoría'} subtitle={'Restaurante'} />
      <DashboardUserPropItem iconUrl={getIconUrl('heartfavorite', currentTheme, true)} title={'Favoritos'} subtitle={'0 Usuarios'} />
      <DashboardUserPropItem iconUrl={getIconUrl('starout', currentTheme, true)} title={'Promedio'} subtitle={'0 Usuarios'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default DashboardUserProps;

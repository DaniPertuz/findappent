import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileDescription from '../ProfileDescription';
import ProfileDetail from '../ProfileDetail';
import ProfileLogoutButton from '../ProfileLogoutButton';
import { ThemeContext } from '../../../theme/ThemeContext';
import { getIconUrl } from '../../../../utils/icon-url';

const ProfileBody = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <ProfileDescription description={'Somos un restaurante de comida rápida con un ambiente familiar y cálido, desde el año 2000 ofrecemos servicio de de restaurante, servicio rápido y servicio a domicilio.'} />
      <ProfileDetail
        label={'Nombre de la empresa'}
        icon={getIconUrl('users', currentTheme, true)}
        text={'Restaurante las Rocas'}
      />
      <ProfileDetail
        label={'Categoría'}
        icon={getIconUrl('restaurant', currentTheme, true)}
        text={'Restaurante'}
      />
      <ProfileDetail
        label={'Correo corporativo'}
        icon={getIconUrl('envelope', currentTheme, true)}
        text={'manager@lasrocas.com'}
      />
      <ProfileLogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 30, paddingTop: 20 },
});

export default ProfileBody;

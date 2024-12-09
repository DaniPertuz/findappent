import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CLOUDINARY_URL } from '../../../../api/cloudinaryIconsAPI';
import DashboardUserPropItem from './DashboardUserPropItem';

const DashboardUserProps = () => {
  return (
    <View style={styles.container}>
      <DashboardUserPropItem iconUrl={`${CLOUDINARY_URL}/restaurant`} title={'Categoría'} subtitle={'Restaurante'} />
      <DashboardUserPropItem iconUrl={`${CLOUDINARY_URL}/heart-favorite`} title={'Favoritos'} subtitle={'0 Usuarios'} />
      <DashboardUserPropItem iconUrl={`${CLOUDINARY_URL}/star-out`} title={'Promedio'} subtitle={'0 Usuarios'} />
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

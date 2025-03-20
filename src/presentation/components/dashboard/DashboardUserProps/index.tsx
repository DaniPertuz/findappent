import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardReviewsModal from '../DashboardReviewsModal';
import DashboardUserPropItem from './DashboardUserPropItem';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

const DashboardUserProps: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <DashboardUserPropItem iconUrl={getIconUrl('restaurant', currentTheme, true)} title={'Categoría'} subtitle={'Restaurante'} />
        <DashboardUserPropItem iconUrl={getIconUrl('heartfavorite', currentTheme, true)} title={'Favoritos'} subtitle={'0 Usuarios'} />
        <DashboardUserPropItem iconUrl={getIconUrl('starout', currentTheme, true)} title={'Promedio'} subtitle={'0 Usuarios'} onPress={() => setModalVisible(true)} />
      </View>
      <DashboardReviewsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default DashboardUserProps;

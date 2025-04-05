import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardReviewsModal from '../DashboardReviewsModal';
import DashboardUserPropItem from './DashboardUserPropItem';
import { placeCategory } from '../../../../utils/categories';
import { getIconUrl } from '../../../../utils/icon-url';
import { usePlaceData } from '../../../hooks/usePlaceData';
import { ThemeContext } from '../../../theme/ThemeContext';

const DashboardUserProps: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const { favorites, place, ratingAverage, ratings } = usePlaceData();
  const categoryValue: string = place ? placeCategory(place) ?? 'others' : 'others';
  const iconUrl = getIconUrl(categoryValue, currentTheme, true);
  const categoryLabel = place?.category || 'Sin categoría';

  return (
    <>
      <View style={styles.container}>
        <DashboardUserPropItem iconUrl={iconUrl} title={'Categoría'} subtitle={categoryLabel} />
        <DashboardUserPropItem iconUrl={getIconUrl('heartfavorite', currentTheme, true)} title={'Favoritos'} subtitle={`${favorites.total} Usuario${favorites.total === 1 ? '' : 's'}`} />
        <DashboardUserPropItem iconUrl={getIconUrl('starout', currentTheme, true)} title={`${ratingAverage.toFixed(2)}`} subtitle={`${ratings.total} Usuario${ratings.total === 1 ? '' : 's'}`} onPress={() => setModalVisible(true)} />
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

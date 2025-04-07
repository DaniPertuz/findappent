import React, { FC, useContext, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ReviewItem from '../ReviewItem';
import { Caption1 } from '../../../ui';
import { deviceHeight } from '../../../../../utils/dimensions';
import { RatingResponse } from '../../../../../interfaces/app.interface';
import ReviewPagination from '../ReviewPagination';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewsList: FC<{ data: RatingResponse; }> = ({ data }) => {
  const { colors } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const { ratings, next, prev, page } = data;
  const isEmpty = ratings.length === 0;
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {loading ?
        <ActivityIndicator style={{ height: deviceHeight * 0.766 }} size="large" color={colors.mainText} />
        :
        <FlatList
          data={ratings}
          contentContainerStyle={[styles.listContentContainer, isEmpty && styles.emptyList]}
          renderItem={({ item }) => <ReviewItem item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.createdAt}
          ListEmptyComponent={
            <Caption1 customColor={colors.mainText}>No hay reseñas todavía</Caption1>
          }
        />
      }
      <ReviewPagination prev={prev} next={next} page={page} setLoading={setLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: deviceHeight * 0.85 },
  emptyList: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0 },
  listContentContainer: { paddingHorizontal: 20, gap: 20 },
});

export default ReviewsList;

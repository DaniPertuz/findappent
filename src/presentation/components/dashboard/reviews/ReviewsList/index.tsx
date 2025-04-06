import React, { FC, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ReviewItem from '../ReviewItem';
import { deviceHeight } from '../../../../../utils/dimensions';
import { RatingResponse } from '../../../../../interfaces/app.interface';
import ReviewPagination from '../ReviewPagination';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewsList: FC<{ data: RatingResponse; }> = ({ data }) => {
  const { colors } = useContext(ThemeContext);
  const { ratings, next, prev, page } = data;
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={ratings}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => <ReviewItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
      <ReviewPagination prev={prev} next={next} page={page} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: deviceHeight * 0.85 },
  listContentContainer: { paddingHorizontal: 20, gap: 20 },
});

export default ReviewsList;

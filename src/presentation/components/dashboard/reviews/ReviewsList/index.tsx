import React, { FC, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { IRate } from '../../../../../core/entities';
import ReviewItem from '../ReviewItem';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewsList: FC<{ data: IRate[]; }> = ({ data }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={data}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => <ReviewItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContentContainer: { paddingHorizontal: 20, gap: 20, marginVertical: 20 },
});

export default ReviewsList;

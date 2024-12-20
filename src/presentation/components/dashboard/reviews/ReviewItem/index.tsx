import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../../theme/ThemeContext';
import ReviewUserPic from '../ReviewUserPic';
import ReviewBody from '../ReviewBody';

const ReviewItem: FC<{ item: any; }> = ({ item }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.white }, styles.container]}>
      <ReviewUserPic />
      <ReviewBody />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default ReviewItem;

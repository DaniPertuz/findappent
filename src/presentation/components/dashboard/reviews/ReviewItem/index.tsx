import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { IRate } from '../../../../../core/entities';
import ReviewUserPic from '../ReviewUserPic';
import ReviewBody from '../ReviewBody';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewItem: FC<{ item: IRate; }> = ({ item }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.white }, styles.container]}>
      <ReviewUserPic photoUrl={item.user?.photo} />
      <ReviewBody username={item.user!.name} rate={item.rate} comments={item.comments} createdAt={item.createdAt} />
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

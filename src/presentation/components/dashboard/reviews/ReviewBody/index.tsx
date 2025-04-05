import React, { FC, useContext } from 'react';
import ReviewBodyContainer from './ReviewBodyContainer';
import ReviewBodyHeader from './ReviewBodyHeader';
import ReviewBodyRating from './ReviewBodyRating';
import { Footnote } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  username: string;
  rate: number;
  comments: string;
  createdAt: string;
}

const ReviewBody: FC<Props> = ({ username, rate, comments, createdAt }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ReviewBodyContainer>
      <ReviewBodyHeader user={username} time={createdAt} />
      <ReviewBodyRating rate={rate} />
      <Footnote customColor={colors.mainText}>{comments}</Footnote>
    </ReviewBodyContainer>
  );
};

export default ReviewBody;

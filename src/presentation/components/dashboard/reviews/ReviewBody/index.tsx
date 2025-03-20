import React, { FC, useContext } from 'react';
import ReviewBodyContainer from './ReviewBodyContainer';
import ReviewBodyHeader from './ReviewBodyHeader';
import ReviewBodyRating from './ReviewBodyRating';
import { Footnote } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewBody: FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <ReviewBodyContainer>
      <ReviewBodyHeader user={'Daniel Pertuz'} time={'Hace 3 meses'} />
      <ReviewBodyRating rate={3} />
      <Footnote customColor={colors.mainText}>Comentarios</Footnote>
    </ReviewBodyContainer>
  );
};

export default ReviewBody;

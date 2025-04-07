import React, { FC, useContext } from 'react';
import { Caption1 } from '../../../ui';
import PaginationButton from './PaginationButton';
import PaginationContainer from './PaginationContainer';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { usePlaceData } from '../../../../hooks/usePlaceData';

interface Props {
  prev: string | null;
  next: string | null;
  page: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewPagination: FC<Props> = ({ prev, next, page, setLoading }) => {
  const { colors } = useContext(ThemeContext);
  const { getRatingsByUrl } = usePlaceData();

  return (
    <PaginationContainer>
      <PaginationButton icon={'ArrowCircleLeft'} url={prev} onPress={() => {
        if (prev) {
          setLoading(true);
          getRatingsByUrl(prev).finally(() => setLoading(false));
        }
      }} />
      <Caption1 customColor={colors.mainText}>{page}</Caption1>
      <PaginationButton icon={'ArrowCircleRight'} url={next} onPress={() => {
        if (next) {
          setLoading(true);
          getRatingsByUrl(next).finally(() => setLoading(false));
        }
      }} />
    </PaginationContainer>
  );
};

export default ReviewPagination;

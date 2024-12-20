import React, { FC, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../../utils/icon-url';
import { ThemeContext } from '../../../../theme/ThemeContext';

const ReviewUserPic: FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Image
      source={{ uri: getIconUrl('fa_blue', currentTheme, false) }}
      style={styles.picture}
    />
  );
};

const styles = StyleSheet.create({
  picture: {
    borderRadius: 8,
    height: 42,
    width: 42,
  },
});

export default ReviewUserPic;

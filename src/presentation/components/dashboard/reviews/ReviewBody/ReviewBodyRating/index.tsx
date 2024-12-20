import React, { FC, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const ReviewBodyRating: FC<{ rate: number; }> = ({ rate }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rate;
        return (
          <Image
            key={index}
            style={styles.ratingIconSize}
            source={{ uri: getIconUrl(isFilled ? 'star' : 'starout', currentTheme, !isFilled) }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  ratingIconSize: { height: 20, width: 20 },
});

export default ReviewBodyRating;

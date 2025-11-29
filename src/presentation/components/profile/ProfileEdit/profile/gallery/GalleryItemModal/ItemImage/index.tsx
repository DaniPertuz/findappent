import React, { FC, useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../../../../../theme/ThemeContext';

const ItemImage: FC<{ uri: string; }> = ({ uri }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Image source={{ uri }} style={styles.imageSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    justifyContent: 'center',
    paddingBottom: 24,
    paddingHorizontal: 32,
  },
  imageSize: {
    borderRadius: 16,
    height: 350,
    width: 350,
  },
});

export default ItemImage;

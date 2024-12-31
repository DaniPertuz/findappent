import React, { FC, useContext } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { BodySmall } from '../../../../../ui';
import { getIconUrl } from '../../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../../theme/ThemeContext';

interface Props {
  galleryType: string;
  onPress: () => void;
}

const GalleryButton: FC<Props> = ({ galleryType, onPress }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const textGallery = galleryType === 'gallery' ? 'Galería' : 'Cámara';

  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.iconSize}
          source={{ uri: getIconUrl(galleryType, currentTheme, true) }}
        />
      </View>
      <BodySmall customColor={colors.mainText}>{textGallery}</BodySmall>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    borderColor: 'rgba(133, 133, 133, 0.25)',
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
  },
  iconSize: {
    height: 35,
    width: 35,
  },
});

export default GalleryButton;

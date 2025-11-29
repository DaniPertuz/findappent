import React, { FC, useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import GalleryItemModal from '../GalleryItemModal';
import { ProductImage } from '../../../../../../../core/entities';
import { getIconUrl } from '../../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../../theme/ThemeContext';

interface Props {
  productImage: ProductImage;
  onRemove: () => void;
  onSetMain: () => void;
}

const GalleryItem: FC<Props> = ({ productImage, onRemove, onSetMain }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const { img: uri, main } = productImage;
  const galleryImageUri = uri || getIconUrl('fa_blue', currentTheme, false);

  return (
    <View>
      {main && <View style={styles.mainImageIndicatorContainer}>
        <Image style={styles.button} source={{ uri: getIconUrl('checksquare', currentTheme, false) }} />
      </View>}
      <Pressable onPress={() => setModalVisible(true)}>
        <Image style={styles.imageFromGallery} source={{ uri: galleryImageUri }} />
      </Pressable>
      <Pressable style={styles.deleteButtonContainer} onPress={onRemove}>
        <Image style={styles.button} source={{ uri: getIconUrl('minus-circle', currentTheme, false) }} />
      </Pressable>
      <GalleryItemModal
        main={main}
        uri={uri}
        modalVisible={modalVisible}
        onSetMain={onSetMain}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 35,
  },
  deleteButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  imageFromGallery: {
    borderRadius: 8,
    height: 100,
    marginHorizontal: 15,
    width: 100,
  },
  mainButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  mainImageIndicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
});

export default GalleryItem;

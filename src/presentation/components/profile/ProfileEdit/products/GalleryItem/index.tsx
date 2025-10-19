import React, { FC, useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import GalleryItemModal from '../GalleryItemModal';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  uri: string;
  onRemove: () => void;
}

const GalleryItem: FC<Props> = ({ uri, onRemove }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image style={styles.imageFromGallery} source={{ uri }} />
      </Pressable>
      <Pressable style={styles.deleteButtonContainer} onPress={onRemove}>
        <Image style={styles.button} source={{ uri: getIconUrl('minus-circle', currentTheme, false) }} />
      </Pressable>
      <GalleryItemModal uri={uri} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  deleteButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  mainButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  button: {
    height: 35,
    width: 35,
  },
  imageFromGallery: {
    borderRadius: 8,
    height: 100,
    marginHorizontal: 15,
    width: 100,
  },
});

export default GalleryItem;

import React, { FC, useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';
import GalleryItemModal from '../GalleryItemModal';

interface Props {
  uri: string;
  onPress: () => void;
}

const GalleryItem: FC<Props> = ({ uri, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image style={styles.imageFromGallery} source={{ uri }} />
      </Pressable>
      <Pressable style={styles.deleteButtonContainer} onPress={onPress}>
        <Image style={styles.deleteButton} source={{ uri: getIconUrl('minus-circle', currentTheme, false) }} />
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
  deleteButton: {
    height: 35,
    width: 35,
  },
  imageFromGallery: {
    borderRadius: 8,
    height: 100,
    marginEnd: 15,
    width: 100,
  },
});

export default GalleryItem;

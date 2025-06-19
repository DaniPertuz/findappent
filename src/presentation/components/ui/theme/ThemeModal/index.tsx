import React, { FC, useContext } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ModalHeader from '../../ModalHeader';
import ThemeButton from '../ThemeModalButton';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const ThemeModal: FC<Props> = ({ modalVisible, setModalVisible }) => {
  const {
    colors,
    setDarkTheme,
    setLightTheme,
    setSystemTheme,
  } = useContext(ThemeContext);

  const handleSystemTheme = () => {
    setSystemTheme();
    setModalVisible(false);
  };

  const handleDarkTheme = () => {
    setDarkTheme();
    setModalVisible(false);
  };

  const handleLightTheme = () => {
    setLightTheme();
    setModalVisible(false);
  };

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible!(!modalVisible);
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, { backgroundColor: colors.background, borderColor: colors.mainText }]}>
          <ModalHeader title={'Tema'} closeIcon={'close'} onPress={() => setModalVisible!(false)} />
          <ThemeButton text={'Sistema'} onPress={handleSystemTheme} />
          <ThemeButton text={'Claro'} onPress={handleLightTheme} />
          <ThemeButton text={'Oscuro'} onPress={handleDarkTheme} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    borderWidth: 1,
    paddingBottom: 20,
    gap: 20,
    borderRadius: 20,
  },
});

export default ThemeModal;

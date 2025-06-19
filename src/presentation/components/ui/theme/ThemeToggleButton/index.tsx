import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ThemeModal from '../ThemeModal';
import ThemeButton from '../ThemeButton';

const ThemeToggleButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ThemeButton onPress={() => setModalVisible(true)} />
      <ThemeModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'flex-end' },
});

export default ThemeToggleButton;

import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption1 } from '../../ui/Caption1';
import { ThemeContext } from '../../../theme/ThemeContext';

const UpdateProfileHeaderTitle = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Caption1 customColor={colors.mainText}>Editar perfil</Caption1>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', left: 0, position: 'absolute', right: 0 },
});

export default UpdateProfileHeaderTitle;
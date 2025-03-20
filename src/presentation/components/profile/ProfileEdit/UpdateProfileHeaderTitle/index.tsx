import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption1 } from '../../../ui';
import { ThemeContext } from '../../../../theme/ThemeContext';

const UpdateProfileHeaderTitle: FC = () => {
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

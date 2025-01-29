import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BodySmall } from '../../../../ui';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const ScheduleSaveButton: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <BodySmall customColor={colors.lightBlue}>Guardar</BodySmall>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});

export default ScheduleSaveButton;

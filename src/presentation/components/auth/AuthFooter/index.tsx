import React, { FC, useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Caption1 } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  label: string;
  link: string;
  onPress?: () => void;
}

const AuthFooter: FC<Props> = ({ label, link, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Caption1 customColor={colors.mainText}>{label}</Caption1>
      <Pressable onPress={onPress}>
        <Caption1 customColor={colors.darkBlue}>{link}</Caption1>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 20,
  },
});

export default AuthFooter;

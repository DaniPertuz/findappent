import React, { FC, useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Body, ButtonComponent } from '../../ui';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  loading: boolean;
  text: string;
  onPress?: () => void;
}

const AuthButton: FC<Props> = ({ loading, text, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.loginButtonContainer}>
      <ButtonComponent onPress={onPress}>
        {loading
          ?
          <ActivityIndicator size={24} color={colors.brandWhite} />
          :
          <Body customColor={colors.brandWhite}>{text}</Body>
        }
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
});

export default AuthButton;

import React, { FC, useContext } from 'react';
import { ActivityIndicator, Pressable, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonComponent: FC<Props> = ({ children, customStyle, disabled, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [styles.button, { backgroundColor: colors.darkBlue, opacity: pressed ? 0.9 : 1 }, customStyle]}
      onPress={onPress}
    >
      {disabled
        ?
        <ActivityIndicator size={24} color={colors.brandWhite} />
        :
        <>
          {children}
        </>
      }
    </Pressable>
  );
};

export default ButtonComponent;

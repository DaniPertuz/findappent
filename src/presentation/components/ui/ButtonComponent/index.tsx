import React, { FC, useContext } from 'react';
import { ActivityIndicator, Pressable, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../../../theme/ThemeContext';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const ButtonComponent: FC<Props> = ({ children, customStyle, disabled, loading, onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable
      disabled={disabled || loading}
      style={({ pressed }) => [styles.button, { backgroundColor: colors.darkBlue, opacity: pressed ? 0.9 : 1 }, customStyle]}
      onPress={onPress}
    >
      {loading
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

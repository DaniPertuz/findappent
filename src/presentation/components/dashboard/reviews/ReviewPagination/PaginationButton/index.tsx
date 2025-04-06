import React, { FC, useContext } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { getIconUrl } from '../../../../../../utils/icon-url';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  icon: string;
  url: string | null;
  onPress: () => void;
}

const PaginationButton: FC<Props> = ({ icon, url, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);
  const buttonOpacity = { opacity: url ? 1 : 0.5 };
  return (
    <Pressable
      onPress={onPress}
      disabled={!url}
    >
      <Image
        source={{ uri: getIconUrl(icon, currentTheme, true) }}
        style={[styles.icon, buttonOpacity]}
      />
    </Pressable>

  );
};

const styles = StyleSheet.create({
  icon: { height: 30, width: 30 },
});

export default PaginationButton;

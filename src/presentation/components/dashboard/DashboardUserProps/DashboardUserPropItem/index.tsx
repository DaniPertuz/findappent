import React, { FC, useContext } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { BodySmall } from '../../../ui/BodySmall';
import { Footnote } from '../../../ui/Footnote';
import { ThemeContext } from '../../../../theme/ThemeContext';

interface Props {
  iconUrl: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const DashboardUserPropItem: FC<Props> = ({ iconUrl, title, subtitle, onPress }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const bgItem = {
    backgroundColor: colors.brandWhite,
    borderColor: currentTheme === 'dark' ? colors.brandWhite : undefined,
    borderWidth: currentTheme === 'dark' ? 1 : 0,
  };
  return (
    <View style={[bgItem, styles.container]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        <Image source={{ uri: iconUrl }} style={styles.iconSize} />
        <BodySmall customColor={colors.mainText}>{title}</BodySmall>
        <Footnote customColor={colors.mainText}>{subtitle}</Footnote>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
  },
  iconSize: {
    height: 33,
    width: 33,
  },
  pressableContainer: {
    alignItems: 'center',
  },
});

export default DashboardUserPropItem;

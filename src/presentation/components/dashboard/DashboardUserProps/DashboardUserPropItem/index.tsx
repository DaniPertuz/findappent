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
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[{ backgroundColor: colors.brandWhite }, styles.container]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        <Image source={{ uri: iconUrl }} style={styles.iconSize} />
        <BodySmall customColor={colors.brandMainText}>{title}</BodySmall>
        <Footnote customColor={colors.brandMainText}>{subtitle}</Footnote>
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

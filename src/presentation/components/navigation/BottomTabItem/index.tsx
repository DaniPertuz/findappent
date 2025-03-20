import React, { FC, useContext, useMemo } from 'react';
import { Image, View } from 'react-native';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';
import { BodySmall } from '../../ui';
import { styles } from './styles';

interface Props {
  focused: boolean;
  iconFocused: string;
  iconNotFocused: string;
  text: string;
}

const BottomTabItem: FC<Props> = ({ focused, iconFocused, iconNotFocused, text }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const textColor = focused ? colors.darkBlue : (currentTheme === 'dark' ? colors.quaternaryText : colors.secondaryText);
  const iconUrl = useMemo(() =>
    getIconUrl(focused ? iconFocused : iconNotFocused, currentTheme, !focused),
    [focused, iconFocused, iconNotFocused, currentTheme]
  );

  return (
    <View style={styles.bottomTabNavigatorItem}>
      <Image source={{ uri: iconUrl }} style={styles.tabIcon} />
      <BodySmall customColor={textColor}>{text}</BodySmall>
    </View>
  );
};

export default BottomTabItem;

import React, { FC, useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Footnote } from '../../ui/Footnote';
import { getIconUrl } from '../../../../utils/icon-url';
import { ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  level: string;
}

const SubscriptionBadge: FC<Props> = ({ level }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={(level === '3')
          ? ['#D6B238', '#F6E074']
          : (level === '2')
            ? ['#B8B8B8', '#E2E2E2']
            : ['#C08E5E', '#FAC294']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Image
          style={styles.badgeIcon}
          source={{
            uri: getIconUrl(
              (level === '3')
                ? 'trophy'
                : (level === '2')
                  ? 'medium-level'
                  : 'basic-level',
              currentTheme,
              false
            ),
          }}
        />
        <Footnote>Nivel {level}</Footnote>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeIcon: {
    height: 22,
    width: 22,
  },
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  linearGradient: {
    alignItems: 'center',
    borderRadius: 999,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default SubscriptionBadge;

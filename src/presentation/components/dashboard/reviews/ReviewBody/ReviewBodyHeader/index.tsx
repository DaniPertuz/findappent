import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption2 } from '../../../../ui/Caption2';
import { Subheadline } from '../../../../ui/Subheadline';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  user: string;
  time: string;
}

const ReviewBodyHeader: FC<Props> = ({ user, time }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Subheadline customColor={colors.mainText}>{user}</Subheadline>
      </View>
      <View style={styles.timeContainer}>
        <Caption2 customColor={colors.mainText}>{time}</Caption2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  timeContainer: {
    alignItems: 'flex-end',
    flex: 1,
    maxWidth: '35%',
  },
  userContainer: {
    flex: 1,
    maxWidth: '65%',
  },
});

export default ReviewBodyHeader;

import React, { FC, useContext } from 'react';
import { Pressable } from 'react-native';
import { BodySmall } from '../../../../ui';
import { ThemeContext } from '../../../../../theme/ThemeContext';

const ScheduleEditButton: FC<{ onPress: () => void; }> = ({ onPress }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress}>
      <BodySmall customColor={colors.lightBlue}>Editar</BodySmall>
    </Pressable>
  );
};

export default ScheduleEditButton;

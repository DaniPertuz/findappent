import React, {FC} from 'react';
import {Button} from 'react-native-paper';
import {useColors} from '../../../theme/colors';
import {styles} from './styles';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
}

export const ButtonComponent: FC<Props> = ({children, onPress}) => {
  const {darkBlue, brandWhite} = useColors();
  return (
    <Button
      mode="contained"
      textColor={brandWhite}
      style={[styles.button, {backgroundColor: darkBlue}]}
      onPress={onPress}>
      {children}
    </Button>
  );
};

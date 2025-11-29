import React, { FC, useContext } from 'react';
import { Body, ButtonComponent } from '../../../../ui';
import { ThemeContext } from '../../../../../theme/ThemeContext';

interface Props {
  loading: boolean;
  values: any;
  onPress: (values: any) => void;
}

const UpdateProfileButton: FC<Props> = ({ loading, values, onPress }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ButtonComponent disabled={loading} loading={loading} onPress={() => onPress(values)}>
      <Body customColor={colors.brandWhite}>Guardar cambios</Body>
    </ButtonComponent>
  );
};

export default UpdateProfileButton;

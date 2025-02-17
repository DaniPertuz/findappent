import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../styles';
import { styles } from './styles';

interface Props {
  description: string;
  onChange: (value: string, field: 'description') => void;
}

const DescriptionInput: FC<Props> = ({ description, onChange }) => {
  const { colors } = useContext(ThemeContext);
  const { inputContainer } = useStyles();

  return (
    <View style={inputContainer}>
      <TextInput
        placeholder={'Descripción'}
        placeholderTextColor={colors.gray}
        keyboardType={'default'}
        style={[styles.inputField, { color: colors.mainText }]}
        cursorColor={colors.mainText}
        selectionColor={colors.mainText}
        autoCapitalize={'none'}
        autoCorrect={false}
        multiline
        onChangeText={(value) => onChange(value, 'description')}
        value={description}
      />
    </View>
  );
};

export default DescriptionInput;

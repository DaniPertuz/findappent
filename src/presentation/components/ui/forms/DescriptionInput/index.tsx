import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { useColors } from '../../../../theme/colors';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../styles';
import { styles } from './styles';

interface Props {
  description: string;
  onChange: (value: string, field: 'description') => void;
}

const DescriptionInput: FC<Props> = ({ description, onChange }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { brandMainText, gray } = useColors(currentTheme === 'light');
  const { inputContainer } = useStyles();

  return (
    <View style={inputContainer}>
      <TextInput
        placeholder={'Descripción'}
        placeholderTextColor={gray}
        keyboardType={'default'}
        style={styles.inputField}
        cursorColor={brandMainText}
        selectionColor={gray}
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

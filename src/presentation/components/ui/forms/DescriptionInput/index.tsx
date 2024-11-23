import React, { FC } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useColors } from '../../../../theme/colors';
import { useStyles } from '../styles';
import { styles } from './styles';

interface Props {
  description: string;
  onChange: (value: string, field: 'description') => void;
}

const DescriptionInput: FC<Props> = ({ description, onChange }) => {
  const { brandMainText, gray } = useColors();
  const { inputContainer, underline } = useStyles();

  return (
    <View style={inputContainer}>
      <TextInput
        placeholder={'Descripción'}
        placeholderTextColor={gray}
        keyboardType={'default'}
        style={styles.inputField}
        cursorColor={brandMainText}
        selectionColor={gray}
        underlineStyle={underline}
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

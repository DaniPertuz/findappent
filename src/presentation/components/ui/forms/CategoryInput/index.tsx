import React, { FC, useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Caption2 from '../../Caption2';
import { ThemeContext } from '../../../../theme/ThemeContext';
import { useStyles } from '../styles';
import { getIconUrl } from '../../../../../utils/icon-url';

interface Props {
  placeholder?: string;
  value: string[];
  warning?: boolean;
  onChange: (categories: string[]) => void;
}

const CategoryInput: FC<Props> = ({ placeholder, value, warning, onChange }) => {
  const { colors, currentTheme } = useContext(ThemeContext);
  const [text, setText] = useState('');
  const { input, inputContainer, warningBorder } = useStyles();

  const containerStyle = [
    inputContainer,
    warning && warningBorder,
  ];

  const handleAddCategory = () => {
    const trimmedText = text.trim();
    if (trimmedText && !value.includes(trimmedText)) {
      onChange([...value, trimmedText]);
    }
    setText('');
  };

  const handleRemoveCategory = (category: string) => {
    onChange(value.filter(item => item !== category));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tagsContainer}>
        {value.map((tag, index) => (
          <View key={index} style={[styles.tag, { backgroundColor: colors.background, borderColor: colors.gray }]}>
            <Caption2 customColor={colors.mainText}>{tag}</Caption2>
            <Pressable style={styles.deleteButton} onPress={() => handleRemoveCategory(tag)}>
              <Image
                source={{ uri: getIconUrl('close', currentTheme, true) }}
                style={styles.deleteIcon}
              />
            </Pressable>
          </View>
        ))}
      </View>
      <View style={containerStyle}>
        <TextInput
          style={[{ color: colors.mainText }, input]}
          placeholder={placeholder || 'Agregar categoría'}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAddCategory}
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  deleteButton: {
    padding: 2.5,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
  },
  tagText: {
    marginRight: 5,
  },
  remove: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CategoryInput;

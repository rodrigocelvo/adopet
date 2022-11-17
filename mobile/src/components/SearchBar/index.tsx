import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Button, RemixIcon } from './styles';

import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export function SearchBar({ icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const theme = useTheme();

  const navigation = useNavigation();

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  function handleSearch(value: string) {
    if (!value) return;

    if (value == 'macho') {
      value = 'male';
    }

    if (value == 'femea') {
      value = 'female';
    }

    navigation.navigate('petsearch', { search: value.toLowerCase() });
  }

  return (
    <Container isFocused={isFocused}>
      <TextInput
        onBlur={handleOnBlur}
        value={search}
        onChangeText={setSearch}
        onFocus={handleOnFocus}
        autoCapitalize="none"
        {...rest}
      />

      <Button onPress={() => handleSearch(search)}>
        {icon && (
          <RemixIcon
            name={icon}
            color={isFocused ? theme.COLORS.SHAPE : theme.COLORS.HEADING}
            size={24}
          />
        )}
      </Button>
    </Container>
  );
}

import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Button, RemixIcon } from './styles';

import { THEME } from '../../theme';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export function SearchBar({ icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      <TextInput onBlur={handleOnBlur} onFocus={handleOnFocus} {...rest} />

      <Button>
        {icon && (
          <RemixIcon
            name={icon}
            color={isFocused ? THEME.COLORS.SHAPE : THEME.COLORS.HEADING}
            size={24}
          />
        )}
      </Button>
    </Container>
  );
}
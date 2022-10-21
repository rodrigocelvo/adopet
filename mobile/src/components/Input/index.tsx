import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, RemixIcon } from './styles';

import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export function Input({ icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      {icon && (
        <RemixIcon
          name={icon}
          color={
            isFocused ? theme.COLORS.PRIMARY_500 : theme.COLORS.CAPTION_500
          }
          size={24}
        />
      )}
      <TextInput onBlur={handleOnBlur} onFocus={handleOnFocus} {...rest} />
    </Container>
  );
}

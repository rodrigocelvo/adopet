import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, RemixIcon } from './styles';

import { THEME } from '../../theme';

interface InputProps extends TextInputProps {
  icon?: ReactNode;
}

export function Input({ icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

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
            isFocused ? THEME.COLORS.PRIMARY_500 : THEME.COLORS.CAPTION_400
          }
          size={24}
        />
      )}
      <TextInput onBlur={handleOnBlur} onFocus={handleOnFocus} {...rest} />
    </Container>
  );
}

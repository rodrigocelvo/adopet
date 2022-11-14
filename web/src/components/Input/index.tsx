import React, { InputHTMLAttributes, useState, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { THEME } from '../../theme';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: boolean;
  isErrored: boolean;
}

export function Input({ name, icon: Icon, error, isErrored, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused} isErrored={isErrored}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        autoComplete="off"
        {...rest}
      />

      {error && (
        <>
          <Error error={error}>
            <FiAlertCircle color={THEME.COLORS.ALERT} size={20} />
          </Error>
        </>
      )}
    </Container>
  );
}

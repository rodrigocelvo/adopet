import React, { useState, useRef, TextareaHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { THEME } from '../../theme';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  error?: boolean;
  isErrored: boolean;
}

export function TextArea({
  name,
  containerStyle = {},
  icon: Icon,
  error,
  isErrored,
  ...rest
}: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
    <Container
      style={containerStyle}
      isFilled={isFilled}
      isFocused={isFocused}
      isErrored={isErrored}
    >
      {Icon && <Icon size={20} />}
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        cols={40}
        rows={8}
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

import React, { InputHTMLAttributes, useState, useRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { THEME } from '../../theme';
import { Input } from '../Input';

import { Container, Error, ErrorContainer, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control | any;
  name: string;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
  isErrored: boolean;
  label: string;
}

export function InputControlled({ control, name, label, error, icon, ...rest }: InputProps) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input name={name} id={name} onChange={onChange} value={value} icon={icon} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

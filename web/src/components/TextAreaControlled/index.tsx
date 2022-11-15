import React, { InputHTMLAttributes, useState, useRef, TextareaHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { TextArea } from '../TextArea';

import { Container, Error, Label } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control | any;
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
  isErrored: boolean;
  label: string;
}

export function TextAreaControlled({ control, name, label, error, icon, ...rest }: TextAreaProps) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextArea name={name} id={name} onChange={onChange} value={value} icon={icon} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

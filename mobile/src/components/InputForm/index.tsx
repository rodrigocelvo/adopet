import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container, Error } from './styles';

import { Input } from '../Input';

interface Props extends TextInputProps {
  control: Control | any;
  name: string;
  error?: string;
  icon?: string;
}

export function InputForm({ icon, control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} icon={icon} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

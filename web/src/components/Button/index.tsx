import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <Container type="button" disabled={!!loading} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
}

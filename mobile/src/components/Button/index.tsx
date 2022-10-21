import React, { ReactNode } from 'react';

import { Container, Title } from './styles';
import { Loading } from '../../components/Loading';

import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Loading /> : <Title>{children}</Title>}
    </Container>
  );
}

import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Loading } from '../../components/Loading';
import { Container, Title } from './styles';

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

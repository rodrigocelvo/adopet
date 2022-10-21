import React from 'react';

import { Container, Title, Description } from './styles';

interface PetDetailsProps {
  title: string;
  description: string;
}

export function PetDetails({ title, description, ...rest }: PetDetailsProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

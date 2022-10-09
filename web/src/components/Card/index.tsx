import React from 'react';
import { Container, Content, Title, Description, Icon } from './styles';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <Container>
      <Icon src={icon} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

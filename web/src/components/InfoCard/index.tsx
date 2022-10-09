import React from 'react';
import { Container, Content, Title, Description, Icon } from './styles';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

export function InfoCard({ icon, title, description }: InfoCardProps) {
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

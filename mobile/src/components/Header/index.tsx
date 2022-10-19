import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SmallButton } from '../SmallButton';

import { Container, Title, BTA } from './styles';

interface HeaderProps {
  title?: string;
  goBack?: boolean;
}

export function Header({ title, goBack }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {goBack ? (
        <SmallButton icon="arrow-left-line" onPress={handleGoBack} />
      ) : (
        <BTA />
      )}
      <Title>{title}</Title>
      <BTA />
    </Container>
  );
}

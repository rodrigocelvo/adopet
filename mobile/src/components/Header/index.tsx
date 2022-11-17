import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SmallButton } from '../SmallButton';

import { Container, Title, BTA } from './styles';

interface HeaderProps {
  title?: string;
  goBack?: boolean;
  favorite?: boolean;
  onFavorite?: () => void;

  style?: object;
}

export function Header({ title, goBack, ...rest }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container {...rest}>
        {goBack ? (
          <SmallButton icon="arrow-left-line" onPress={handleGoBack} />
        ) : (
          <BTA />
        )}
        <Title>{title}</Title>
        <BTA />
      </Container>
    </>
  );
}

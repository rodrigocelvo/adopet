import React from 'react';
import { ActivityIndicatorProps } from 'react-native';

import { useTheme } from 'styled-components';

import { Container, Load } from './styles';

export function Loading({}: ActivityIndicatorProps) {
  const theme = useTheme();

  return (
    <Container>
      <Load color={theme.COLORS.TEXT} size={'small'} />
    </Container>
  );
}

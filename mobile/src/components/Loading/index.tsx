import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Load } from './styles';
import { ActivityIndicatorProps } from 'react-native';

export function Loading({}: ActivityIndicatorProps) {
  const theme = useTheme();

  return (
    <Container>
      <Load color={theme.COLORS.TEXT} size={'small'} />
    </Container>
  );
}

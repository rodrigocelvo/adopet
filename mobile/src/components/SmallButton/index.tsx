import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, RemixIcon } from './styles';

interface SmallButtonProps extends RectButtonProps {
  icon: ReactNode;
  size?: number;
  color?: string;
}

export function SmallButton({ icon, ...rest }: SmallButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      {icon && (
        <RemixIcon name={icon} color={theme.COLORS.TEXT} size={32} {...rest} />
      )}
    </Container>
  );
}

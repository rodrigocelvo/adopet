import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { THEME } from '../../theme';

import { Container, RemixIcon } from './styles';

interface SmallButtonProps extends RectButtonProps {
  icon: ReactNode;
}

export function SmallButton({ icon, ...rest }: SmallButtonProps) {
  return (
    <Container {...rest}>
      {icon && (
        <RemixIcon name={icon} color={THEME.COLORS.TEXT} size={32} {...rest} />
      )}
    </Container>
  );
}

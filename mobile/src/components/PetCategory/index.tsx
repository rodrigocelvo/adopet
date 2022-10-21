import React from 'react';

import { Container, Icon, Title } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface PetTypeProps {
  title: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export function PetCategory({ title, icon }: PetTypeProps) {
  const theme = useTheme();

  return (
    <Container>
      {icon && (
        <Icon>
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={theme.COLORS.PRIMARY_500}
          />
        </Icon>
      )}
      <Title>{title}</Title>
    </Container>
  );
}

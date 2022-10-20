import React from 'react';

import { Container, Icon, Title } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';

interface PetTypeProps {
  title: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export function PetCategory({ title, icon }: PetTypeProps) {
  return (
    <Container>
      {icon && (
        <Icon>
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={THEME.COLORS.PRIMARY_900}
          />
        </Icon>
      )}
      <Title>{title}</Title>
    </Container>
  );
}

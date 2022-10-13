import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SmallButtonProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  color?: string;
}

export function SmallButton({ name, icon: Icon, color, ...rest }: SmallButtonProps) {
  return <Container {...rest}>{Icon && <Icon title={name} size={20} color={color} />}</Container>;
}

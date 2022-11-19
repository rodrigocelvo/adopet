import React from 'react';

import { Container } from './styles';

interface AvatarProps {
  name: string;
  avatar: string;
  size: number;
}

export function Photo({ name, avatar, size, ...rest }: AvatarProps) {
  if (!avatar) {
    avatar = `https://ui-avatars.com/api/?background=5AA9EF&color=CCF8F9&size=500&name=${name}`;
  } else {
    avatar = avatar;
  }

  return <Container size={size} source={{ uri: avatar }} {...rest} />;
}

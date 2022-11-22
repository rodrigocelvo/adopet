import React from 'react';
import UserAvatar from 'react-native-user-avatar';

import { Container } from './styles';

interface AvatarProps {
  name: string;
  avatar: string | null;
  size: number;
}

export function Photo({ name, avatar, size }: AvatarProps) {
  if (!avatar)
    return (
      <UserAvatar
        size={size}
        name={name}
        bgColor="#5AA9EF"
        textColor="#CCF8F9"
      />
    );

  return <Container size={size} source={{ uri: avatar }} />;
}

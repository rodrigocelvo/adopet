import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { CaretLeft, Export } from 'phosphor-react-native';

import {
  Container,
  ButtonLeft,
  ButtonRight,
  Title,
  EmptyBoxSpace,
} from './styles';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
  onShare?: () => void;

  style?: object;
}

export function Header({
  title,
  showBackButton,
  showShareButton,
  onShare,
  ...rest
}: HeaderProps) {
  const THEME = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest}>
      {showBackButton ? (
        <ButtonLeft onPress={handleGoBack}>
          <CaretLeft size={24} color={THEME.COLORS.TEXT} />
        </ButtonLeft>
      ) : (
        <EmptyBoxSpace />
      )}
      <Title>{title}</Title>
      {showShareButton ? (
        <ButtonRight onPress={onShare}>
          <Export size={24} color={THEME.COLORS.PRIMARY_500} />
        </ButtonRight>
      ) : (
        <EmptyBoxSpace />
      )}
    </Container>
  );
}

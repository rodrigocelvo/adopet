import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  Container,
  Header,
  SmallButton,
  Title,
  Content,
  Logo,
  AppName,
} from './styles';

import logoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <>
      <SafeAreaView />
      <Container>
        <Header>
          <Title>1</Title>
          <Title>2</Title>
          <Title>3</Title>
        </Header>

        <Content>
          <Logo source={logoImg} />
          <AppName>Adopet</AppName>

          <Button>Entrar</Button>
        </Content>
      </Container>
    </>
  );
}

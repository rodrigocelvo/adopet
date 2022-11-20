import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import { Container, Content, Header, Title, Description } from './styles';
import headerImg from '../../assets/header.png';

export function Welcome() {
  const navigation = useNavigation();

  function goSignIn() {
    navigation.navigate('signin');
  }

  return (
    <Container>
      <Header source={headerImg} />
      <Content>
        <Title>Adote um pet</Title>
        <Description>Venha me adotar, nós dois precisamos de amor.</Description>
        <Button onPress={goSignIn}>Adotar</Button>
      </Content>
    </Container>
  );
}

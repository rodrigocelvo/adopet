import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import headerImg from '../../assets/header.png';
import { Button } from '../../components/Button';

import { Container, Content, Header, Title, Description } from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function goSignIn() {
    navigation.navigate('signin');
  }

  return (
    <>
      <Container>
        <Header source={headerImg} />
        <Content>
          <Title>Adote um pet</Title>
          <Description>
            Venha me adotar, nós dois precisamos de amor.
          </Description>
          <Button onPress={goSignIn}>Adotar</Button>
        </Content>
      </Container>
    </>
  );
}

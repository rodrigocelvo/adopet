import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Container, Content, Logo, AppName } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/background.png';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <>
      <SafeAreaView />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Esqueci a senha" goBack />
            <Content>
              <Logo source={logoImg} />
              <AppName>Adopet</AppName>

              <Input
                onChangeText={setEmail}
                value={email}
                placeholder="E-mail"
                autoCapitalize="none"
                autoComplete="off"
                icon="mail-fill"
              />

              <Button>Recuperar</Button>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

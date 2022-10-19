import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Logo,
  AppName,
  Account,
  AccountButton,
  AccountText,
} from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/background.png';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <SafeAreaView />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
          <ScrollView>
            <Container>
              <Header title="Login" goBack />
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

                <Input
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Senha"
                  secureTextEntry
                  autoComplete="off"
                  autoCapitalize="none"
                  icon="lock-2-fill"
                />
                <Button>Entrar</Button>
                <Account>
                  <AccountButton>
                    <AccountText>Criar conta</AccountText>
                  </AccountButton>
                  <AccountButton>
                    <AccountText>Esqueci a senha</AccountText>
                  </AccountButton>
                </Account>
              </Content>
            </Container>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

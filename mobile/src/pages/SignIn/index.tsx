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
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Login" />
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
              <Button onPress={() => navigation.navigate('home')}>
                Entrar
              </Button>
              <Account>
                <AccountButton onPress={() => navigation.navigate('signup')}>
                  <AccountText>Criar conta</AccountText>
                </AccountButton>
                <AccountButton
                  onPress={() => navigation.navigate('forgotpassword')}>
                  <AccountText>Esqueci a senha</AccountText>
                </AccountButton>
              </Account>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

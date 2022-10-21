import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useNavigation } from '@react-navigation/native';

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
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';

import logoImg from '../../assets/logo.png';

interface signInDFormDataProps {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  // email: yup
  //   .string()
  //   .email('Informe um email válido')
  //   .required('Informe seu email'),
  // password: yup.string().required('Informe sua senha.'),
});

export function SignIn() {
  const navigation = useNavigation();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signInDFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  function handleSignIn(data: signInDFormDataProps) {
    console.log(data);

    navigation.navigate('home');
  }

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

              <InputForm
                name="email"
                control={control}
                placeholder="E-mail"
                autoCapitalize="none"
                autoComplete="off"
                icon="mail-fill"
                error={errors.email?.message}
              />
              <InputForm
                name="password"
                control={control}
                placeholder="E-mail"
                autoCapitalize="none"
                autoComplete="off"
                icon="lock-fill"
                secureTextEntry
                error={errors.password?.message}
              />

              <Button onPress={handleSubmit(handleSignIn)}>Entrar</Button>
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

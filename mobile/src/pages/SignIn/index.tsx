import React from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  Logo,
  AppName,
  Account,
  AccountButton,
  AccountText,
} from './styles';

import logoImg from '../../assets/logo.png';

interface signInFormDataProps {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Infome seu e-mail'),
  password: yup.string().required('Infome sua senha'),
});

export function SignIn() {
  const navigation = useNavigation();
  const THEME = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const { signIn } = useAuth();

  async function handleSignIn({ email, password }: signInFormDataProps) {
    try {
      await signIn({
        email,
        password,
      });
    } catch (err) {
      console.log(err);

      Alert.alert('Oops', 'Não foi possível fazer o login.');
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header style={{ backgroundColor: THEME.COLORS.BACKGROUND }} />
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
                placeholder="Senha"
                autoCapitalize="none"
                autoComplete="off"
                icon="lock-fill"
                error={errors.password?.message}
              />

              <Button onPress={handleSubmit(handleSignIn)}>Entrar</Button>
              <Account>
                <AccountButton onPress={() => navigation.navigate('signup')}>
                  <AccountText>Criar conta</AccountText>
                </AccountButton>
              </Account>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

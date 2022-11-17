import React from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Container,
  Content,
  ScrollView,
  Logo,
  AppName,
  InputGroup,
  InputGroupLine,
  InputGroupLine2,
} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';
import { InputForm } from '../../components/InputForm';

interface signUpDFormDataProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: number;
  city: string;
  uf: string;
}

const signInSchema = yup.object({
  name: yup.string().max(30).required('Informe seu nome'),
  email: yup
    .string()
    .email('Informe um email válido.')
    .required('Informe seu email.'),
  phone: yup
    .string()
    .min(8, 'Número inválido.')
    .matches(new RegExp('[0-9]{8}'), 'Número inválido.')
    .required('Informe o número'),
  city: yup.string().required('Informe sua cidade.'),
  uf: yup
    .string()
    .max(2, 'Sigla inválida.')
    .required('Informe a sigla do seu estado.'),
});

export function SignUp() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpDFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  function handleSignUp(data: signUpDFormDataProps) {
    console.log(data);

    Alert.alert('Conta criada.');
    reset();
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Cadastre-se" goBack />
            <Content>
              <Logo source={logoImg} />
              <AppName>Adopet</AppName>

              <InputForm
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="words"
                autoComplete="name"
                icon="user-fill"
                error={errors.name?.message}
              />

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
                name="phone"
                control={control}
                keyboardType="numeric"
                placeholder="Telefone"
                autoComplete="off"
                autoCapitalize="none"
                icon="phone-fill"
                error={errors.phone?.message}
              />

              <InputGroup>
                <InputGroupLine>
                  <InputForm
                    name="city"
                    control={control}
                    placeholder="Cidade"
                    autoComplete="off"
                    autoCapitalize="none"
                    icon="map-pin-fill"
                    style={{ flex: 1, width: '100%' }}
                    error={errors.city?.message}
                  />
                </InputGroupLine>
                <InputGroupLine2>
                  <InputForm
                    name="uf"
                    control={control}
                    placeholder="UF"
                    autoComplete="off"
                    autoCapitalize="none"
                    icon="map-fill"
                    error={errors.uf?.message}
                  />
                </InputGroupLine2>
              </InputGroup>
              <Button onPress={handleSubmit(handleSignUp)}>Criar conta</Button>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

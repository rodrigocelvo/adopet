import React from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as Clipboard from 'expo-clipboard';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';

import { api } from '../../services/api';
import { useTheme } from 'styled-components';

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

import logoImg from '../../assets/logo.png';

interface signUpFormDataProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: number;
  city: string;
  uf: string;
}

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signInSchema = yup.object({
  name: yup.string().max(30).required('Informe seu nome'),
  email: yup
    .string()
    .email('Informe um email válido.')
    .required('Informe seu email.'),
  password: yup
    .string()
    .required('Digite uma senha.')
    .min(8, 'No mínimo 8 caracteres.')
    .matches(
      passwordRegex,
      'A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais (@, $, !, %, *, ?, &).',
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'A senhas não coincidem.'),
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
  } = useForm<signUpFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const navigation = useNavigation();
  const THEME = useTheme();

  async function handleSignUp({
    name,
    email,
    password,
    phone,
    city,
    uf,
  }: signUpFormDataProps) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        phone,
        city: city.toUpperCase(),
        uf: uf.toUpperCase(),
      });

      Alert.alert('Conta criada!', `Conta criada com sucesso.`);

      navigation.navigate('signin');
    } catch (err) {
      console.log(err);

      Alert.alert(
        'Erro',
        `Oops! Parece que tem algo errado. Já estamos trabalhando para corrigir.`,
      );
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header
              title="Cadastre-se"
              showBackButton
              style={{ backgroundColor: THEME.COLORS.BACKGROUND }}
            />
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
                autoComplete="email"
                icon="mail-fill"
                error={errors.email?.message}
              />

              <InputForm
                name="password"
                control={control}
                placeholder="Senha"
                autoCapitalize="none"
                autoComplete="password"
                icon="lock-fill"
                error={errors.password?.message}
              />

              <InputForm
                name="confirm_password"
                control={control}
                placeholder="Confirme a senha"
                autoCapitalize="none"
                autoComplete="password"
                icon="key-fill"
                error={errors.confirm_password?.message}
              />

              <InputForm
                name="phone"
                control={control}
                keyboardType="numeric"
                placeholder="Telefone"
                autoComplete="tel"
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
                    autoComplete="postal-address-country"
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
                    autoComplete="postal-address-region"
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

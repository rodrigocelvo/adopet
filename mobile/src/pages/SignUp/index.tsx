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
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { useTheme } from 'styled-components';

interface signUpFormDataProps {
  name: string;
  email: string;
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
  } = useForm<signUpFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const navigation = useNavigation();
  const THEME = useTheme();

  async function handleSignUp({
    name,
    email,
    phone,
    city,
    uf,
  }: signUpFormDataProps) {
    try {
      const response = await api.post('/users/', {
        name,
        email,
        phone,
        city: city.toUpperCase(),
        uf: uf.toUpperCase(),
      });

      const { code } = response.data;

      await Clipboard.setStringAsync(code);

      Alert.alert(
        'Conta criada!',
        `Conta criada com sucesso. O código para login ${code} foi copiado para a área de transferencia.`,
      );

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
              title=""
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

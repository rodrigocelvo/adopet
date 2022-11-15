import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone';

import { FiArrowLeft, FiLock, FiMail, FiMap, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';

import {
  Container,
  Content,
  AppName,
  Form,
  FormGroup,
  Title,
  Logo,
  AnimationContainer,
  Background,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { InputControlled } from '../../components/InputControlled';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

interface signUpFormDataProps {
  name: string;
  email: string;
  phone: string;
  city: string;
  uf: string;
}

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const signUpSchema = yup.object({
  name: yup.string().max(30, 'Nome muito grande.').required('Infome o seu nome.'),
  email: yup.string().email().required('Insira seu e-mail.'),
  phone: yup.string().matches(phoneRegex, 'Número inválido. ').required('Informe seu WhatsApp'),
  city: yup.string().required('Insira sua cidade.'),
  uf: yup
    .string()
    .min(2, 'Informe a sigla.')
    .max(2, 'Informe a sigla.')
    .required('Informe a sigla.'),
});

export function SignUp() {
  const navigate = useNavigate();
  const { signed } = useAuth();

  if (signed) {
    navigate('/dashboard');
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleCreateAccount({ name, email, phone, city, uf }: signUpFormDataProps) {
    try {
      const response = await api.post('/users/', {
        name,
        email,
        phone,
        city,
        uf,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert(
        `Conta criada com sucesso. O código para login ${code} foi copiado para a área de transferencia.`
      );

      navigate('/signin');
    } catch (err) {
      console.log(err);

      alert(`Oops! Parece que tem algo errado. Já estamos trabalhando para corrigir.`);
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo" />
          <AppName>Adopet</AppName>

          <Form onSubmit={handleSubmit(handleCreateAccount)}>
            <Title>Crie sua conta</Title>

            <InputControlled
              label="Nome completo"
              control={control}
              name="name"
              placeholder="Nome"
              icon={FiUser}
              error={errors.name?.message}
              isErrored={!!errors.name?.message}
            />
            <InputControlled
              label="E-mail"
              control={control}
              name="email"
              placeholder="E-mail"
              type="email"
              icon={FiMail}
              error={errors.email?.message}
              isErrored={!!errors.email?.message}
            />
            <InputControlled
              label="WhatsApp"
              control={control}
              name="phone"
              placeholder="WhatsApp com DDD"
              icon={FiPhone}
              error={errors.phone?.message}
              isErrored={!!errors.phone?.message}
            />
            <FormGroup>
              <InputControlled
                label="Cidade"
                control={control}
                name="city"
                placeholder="Cidade"
                icon={FiMapPin}
                error={errors.city?.message}
                isErrored={!!errors.city?.message}
                style={{ width: '70px' }}
              />
              <div style={{ marginLeft: '8px' }}></div>
              <InputControlled
                label="Estado"
                control={control}
                name="uf"
                placeholder="UF"
                maxLength={2}
                minLength={2}
                icon={FiMap}
                error={errors.uf?.message}
                isErrored={!!errors.uf?.message}
                style={{ width: '30px', marginTop: '0px' }}
              />
            </FormGroup>

            <Button type="submit">Cadastrar-se</Button>
          </Form>

          <Link to="/signin">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

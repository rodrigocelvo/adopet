import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { InputControlled } from '../../components/InputControlled';

import {
  Container,
  Content,
  AppName,
  Title,
  Logo,
  AnimationContainer,
  Links,
  Background,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';

interface signInDFormDataProps {
  code: string;
}

const signInSchema = yup.object({
  code: yup.string().required('Infome o código'),
});

export function SignIn() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signInDFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const navigate = useNavigate();

  function handleSignIn() {
    navigate('/dashboard');
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo" />
          <AppName>Adopet</AppName>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Title>Faça seu login</Title>

            <InputControlled
              label="Código"
              control={control}
              name="code"
              placeholder="Sua ID"
              icon={FiUser}
              error={errors.code?.message}
              isErrored={!!errors.code?.message}
            />
            <Button type="submit">Entrar</Button>
          </form>

          <Links>
            <Link to="/">
              <FiArrowLeft />
              Voltar para a Home
            </Link>
            <Link to="/signup">
              <FiLogIn />
              Criar conta
            </Link>
          </Links>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

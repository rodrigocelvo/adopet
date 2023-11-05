import React, { FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiKey, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi';

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
import { useAuth } from '../../hooks/auth';
import { ToastCreateAccount } from '../../pages/SignUp';

interface signInFormDataProps {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Infome seu e-mail'),
  password: yup.string().required('Infome sua senha'),
});

export function SignIn() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const navigate = useNavigate();
  const { signIn, signed } = useAuth();

  async function handleSignIn(data: signInFormDataProps) {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });

      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (signed) {
      navigate('/dashboard');
    }
  }, []);

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
              label="E-mail"
              control={control}
              name="email"
              placeholder="Seu email"
              icon={FiUser}
              error={errors.email?.message}
              isErrored={!!errors.email?.message}
              autoComplete="on"
            />

            <InputControlled
              label="Senha"
              control={control}
              name="password"
              placeholder="Sua senha"
              type="password"
              icon={FiLock}
              error={errors.password?.message}
              isErrored={!!errors.password?.message}
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
      <ToastCreateAccount />
    </Container>
  );
}

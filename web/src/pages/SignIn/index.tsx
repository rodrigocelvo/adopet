import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

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

export function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo" />
          <AppName>Adopet</AppName>

          <form onSubmit={handleSubmit}>
            <Title>Faça seu login</Title>

            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
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

import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, AppName, Title, Logo, AnimationContainer, Background } from './styles';

import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo" />
          <AppName>Adopet</AppName>

          <form>
            <Title>Faça seu login</Title>

            <input name="email" placeholder="E-mail" />
            <input name="password" type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

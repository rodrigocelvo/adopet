import React, { useRef, useCallback, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiArrowLeft,
  FiLock,
  FiLogIn,
  FiMail,
  FiMap,
  FiMapPin,
  FiPhone,
  FiUser,
} from 'react-icons/fi';
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

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate('/signin');
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo" />
          <AppName>Adopet</AppName>

          <Form onSubmit={handleSubmit}>
            <Title>Crie sua conta</Title>

            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="email" placeholder="E-mail" type="email" icon={FiMail} />
            <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
            <Input name="whatsapp" placeholder="WhatsApp" icon={FiPhone} />
            <FormGroup>
              <Input name="city" placeholder="Cidade" icon={FiMapPin} style={{ width: '120px' }} />
              <div style={{ marginLeft: '8px' }}></div>
              <Input
                name="uf"
                placeholder="UF"
                icon={FiMap}
                style={{ width: '50px', marginTop: '0px' }}
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

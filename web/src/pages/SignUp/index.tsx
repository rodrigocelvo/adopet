import React, { FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone';

import {
  FiArrowLeft,
  FiKey,
  FiLock,
  FiMail,
  FiMap,
  FiMapPin,
  FiPhone,
  FiUser,
} from 'react-icons/fi';

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
import { useAuth } from '../../hooks/auth';

import toast, { Toaster } from 'react-hot-toast';

interface signUpFormDataProps {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
  city: string;
  uf: string;
}

const phoneRegex = RegExp(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const signUpSchema = yup.object({
  name: yup
    .string()
    .max(30, 'Nome muito grande.')
    .required('Infome o seu nome.')
    .min(2, 'Nome muito curto.'),
  email: yup.string().email('É preciso de um e-mail válido.').required('Insira seu e-mail.'),
  password: yup
    .string()
    .required('Digite uma senha.')
    .min(8, 'No mínimo 8 caracteres.')
    .matches(
      passwordRegex,
      'A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais (@, $, !, %, *, ?, &).'
    ),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'A senhas não coincidem.'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Número inválido. ')
    .required('Informe seu número do WhatsApp.'),
  city: yup.string().required('Insira sua cidade.'),
  uf: yup
    .string()
    .min(2, 'Informe a sigla.')
    .max(2, 'Informe a sigla.')
    .required('Informe a sigla.'),
});

export function ToastCreateAccount() {
  return <Toaster position="bottom-center" />;
}

export function SignUp() {
  const navigate = useNavigate();
  const { signed } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleCreateAccount({
    name,
    email,
    password,
    phone,
    city,
    uf,
  }: signUpFormDataProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
        city: city.toUpperCase(),
        uf: uf.toUpperCase(),
      });

      toast.success(`Conta criada com sucesso.`, {
        duration: 8000,
      });
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    } catch (err) {
      console.log(err);

      toast.error('Não foi possível criar a conta.');
    }
  }

  useEffect(() => {
    if (signed) {
      navigate('/dashboard');
    }
  }, []);

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
              label="Senha"
              control={control}
              name="password"
              placeholder="Senha"
              type="password"
              icon={FiLock}
              error={errors.password?.message}
              isErrored={!!errors.password?.message}
            />

            <InputControlled
              label="Confirmação senha"
              control={control}
              name="confirm_password"
              placeholder="Confirme sua senha"
              type="password"
              icon={FiKey}
              error={errors.confirm_password?.message}
              isErrored={!!errors.confirm_password?.message}
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
      <Toaster position="bottom-center" gutter={24} />
    </Container>
  );
}

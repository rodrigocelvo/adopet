import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Content,
  ScrollView,
  Avatar,
  AvatarContainer,
  UserName,
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
import { useAuth } from '../../hooks/useAuth';
import { Loading } from '../../components/Loading';

interface profileUpdateDataProps {
  name: string;
  email: string;
  phone: number;
  city: string;
  uf: string;
  avatar?: string;
}

const updateUserSchema = yup.object({
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

export function Profile() {
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const { user, updateUser } = useAuth();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<profileUpdateDataProps>({
    resolver: yupResolver(updateUserSchema),
  });

  async function handleUpdateUser({
    name,
    email,
    phone,
    city,
    uf,
  }: profileUpdateDataProps) {
    try {
      await api.put(`/users/${user.id}`, {
        name,
        email,
        phone,
        city: city.toUpperCase(),
        uf: uf.toUpperCase(),
      });

      updateUser(user.id);

      Alert.alert('Conta atualizada!', `Conta atualizada com sucesso!`, [
        {
          text: 'Ok',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (err) {
      console.log(err);

      Alert.alert(
        'Erro',
        `Oops! Parece que tem algo errado. Já estamos trabalhando para corrigir.`,
      );
    }
  }

  async function fetchUser() {
    try {
      setLoading(true);
      const response = await api.get(`/users/${user.id}`);

      const userResponse: profileUpdateDataProps = response.data;

      setValue('name', userResponse.name);
      setValue('email', userResponse.email);
      setValue('phone', userResponse.phone);
      setValue('city', userResponse.city);
      setValue('uf', userResponse.uf);

      setName(userResponse.name);

      if (!!userResponse.avatar) {
        setAvatar(userResponse.avatar);
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);

      try {
        const newUpload = new FormData();

        newUpload.append('avatar', {
          // @ts-ignore
          name: 'avatar',
          uri: result.uri,
        });

        const response = await api.post(`/uploads/user/${user.id}`, newUpload);

        const { image_url } = response.data;

        await api.patch(`/users/image/${user.id}`, {
          avatar: image_url,
        });

        Alert.alert('Perfil', 'Imagem atualizada com sucesso!');

        updateUser(user.id);
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Editar Perfil" goBack />
            <AvatarContainer onPress={handleImage}>
              <Avatar
                source={{
                  uri: !avatar
                    ? `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${user.name}`
                    : avatar,
                }}
              />
            </AvatarContainer>
            <UserName>{name}</UserName>

            <Content>
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
                placeholder="WhatsApp"
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
              <Button onPress={handleSubmit(handleUpdateUser)}>Salvar</Button>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

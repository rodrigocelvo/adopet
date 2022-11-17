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
  const [updateUserProfile, setUpdateUserProfile] =
    useState<profileUpdateDataProps>({} as profileUpdateDataProps);
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

  async function handleSignUp({
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

      Alert.alert('Conta atualizada!', `Conta atualizada com sucesso!`);

      navigation.goBack();
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

  async function handlePicker() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
    });

    console.log(result);

    if (!result.cancelled) {
      setAvatar(result.uri);

      try {
        //tipar
        const newUpload: any = new FormData();

        newUpload.append('avatar', {
          name: 'avatar',
          uri: result.uri,
        });

        const response = await api.post(`/uploads/user/${user.id}`, newUpload);

        const { image_url } = response.data;

        await api.patch(`/users/image/${user.id}`, {
          avatar: image_url,
        });

        Alert.alert('Perfil', 'Imagem atualizada com sucesso!');
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Header title="Editar Perfil" goBack />
            <AvatarContainer onPress={handlePicker}>
              <Avatar
                source={{
                  uri: !avatar ? 'https://github.com/rodrigocelvo.png' : avatar,
                }}
              />
            </AvatarContainer>
            <UserName>{name}</UserName>

            <Content>
              <InputForm
                name="name"
                control={control}
                value="f"
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
                autoComplete="off"
                icon="mail-fill"
                error={errors.email?.message}
              />

              <InputForm
                name="phone"
                control={control}
                keyboardType="numeric"
                placeholder="WhatsApp"
                autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
                    autoCapitalize="none"
                    icon="map-fill"
                    error={errors.uf?.message}
                  />
                </InputGroupLine2>
              </InputGroup>
              <Button onPress={handleSubmit(handleSignUp)}>Salvar</Button>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

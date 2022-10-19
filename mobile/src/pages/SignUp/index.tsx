import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Logo,
  AppName,
  InputGroup,
  InputGroupLine,
  InputGroupLine2,
} from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/background.png';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  return (
    <>
      <SafeAreaView />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
              <Header title="Cadastre-se" goBack />
              <Content>
                <Logo source={logoImg} />
                <AppName>Adopet</AppName>

                <Input
                  onChangeText={setName}
                  value={name}
                  placeholder="Nome"
                  autoCapitalize="words"
                  autoComplete="name"
                  icon="user-fill"
                />

                <Input
                  onChangeText={setEmail}
                  value={email}
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoComplete="off"
                  icon="mail-fill"
                />

                <Input
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Senha"
                  secureTextEntry
                  autoComplete="off"
                  autoCapitalize="none"
                  icon="lock-2-fill"
                />

                <Input
                  onChangeText={setPhone}
                  value={phone}
                  keyboardType="numeric"
                  placeholder="Telefone"
                  autoComplete="off"
                  autoCapitalize="none"
                  icon="phone-fill"
                />

                <InputGroup>
                  <InputGroupLine>
                    <Input
                      onChangeText={setCity}
                      value={city}
                      placeholder="Cidade"
                      autoComplete="off"
                      autoCapitalize="none"
                      icon="map-pin-fill"
                      style={{ flex: 1, width: '100%' }}
                    />
                  </InputGroupLine>
                  <InputGroupLine2>
                    <Input
                      onChangeText={setUf}
                      value={uf}
                      placeholder="UF"
                      autoComplete="off"
                      autoCapitalize="none"
                      icon="map-fill"
                    />
                  </InputGroupLine2>
                </InputGroup>
                <Button>Criar conta</Button>
              </Content>
            </Container>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

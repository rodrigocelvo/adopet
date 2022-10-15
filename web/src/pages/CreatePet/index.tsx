import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Content,
  Header,
  Title,
  Form,
  FormGroup,
  AvatarInput,
  AnimalImageContainer,
  AnimalFormContainer,
  GenreContainer,
  Genre,
  StyledRoot,
  StyledRadio,
  StyledIndicator,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { Navbar } from '../../components/Navbar';
import {
  RiAddCircleFill,
  RiAddCircleLine,
  RiCalendar2Fill,
  RiCamera2Fill,
  RiCameraFill,
  RiEdit2Fill,
  RiEmpathizeFill,
  RiGenderlessFill,
  RiPriceTag3Fill,
  RiPriceTag3Line,
  RiScales2Fill,
  RiScales3Fill,
} from 'react-icons/ri';
import { TextArea } from '../../components/TextArea';

import { ANIMALS } from '../../utils/animals';

export function CreatePet() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate('/dashboard');
  }

  const pett = ANIMALS[0];

  return (
    <Container>
      <Navbar
        loggedIn
        userAvatar="https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg"
      />
      <Content>
        <Header>
          <Title>Criar pet</Title>
          <Button onClick={() => navigate('/pet/new')}>Marcar como adotado</Button>
        </Header>

        <Form onSubmit={handleSubmit}>
          <AnimalImageContainer>
            <AvatarInput>
              <label htmlFor="avatar">
                {/* <img src="https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg" /> */}
                <div>
                  <RiCameraFill />
                </div>
                <input name="asdsad" type="file" id="avatar" />
              </label>
            </AvatarInput>
          </AnimalImageContainer>

          <AnimalFormContainer>
            <Input name="name" placeholder="Nome do pet" icon={RiAddCircleFill} />

            <FormGroup>
              <Input
                name="age"
                placeholder="Idade"
                icon={RiCalendar2Fill}
                style={{ width: '120px' }}
              />
              <div style={{ marginLeft: '8px' }}></div>
              <Input
                name="weight"
                placeholder="Peso"
                icon={RiScales3Fill}
                style={{ width: '50px', marginTop: '0px' }}
              />
            </FormGroup>

            <Input name="breed" placeholder="Raça" icon={RiEmpathizeFill} />

            <GenreContainer>
              <StyledRoot defaultValue="male">
                <p>
                  <RiGenderlessFill /> Sexo
                </p>
                <Genre>
                  <StyledRadio value="male" id="r1">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="r1">Macho</label>
                </Genre>
                <Genre>
                  <StyledRadio value="female" id="r2">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="r2">Fêmea</label>
                </Genre>
              </StyledRoot>
            </GenreContainer>

            <Input name="tags" placeholder="Tags" icon={RiPriceTag3Fill} />

            <TextArea name="description" placeholder="Descrição" icon={RiEdit2Fill} />
            <Button type="submit">Cadastrar pet</Button>
          </AnimalFormContainer>
        </Form>
      </Content>
    </Container>
  );
}

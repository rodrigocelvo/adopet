import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

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
  OptionContainer,
  Option,
  StyledRoot,
  StyledRadio,
  StyledIndicator,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { Navbar } from '../../components/Navbar';
import {
  RiAddCircleFill,
  RiCalendar2Fill,
  RiCameraFill,
  RiEdit2Fill,
  RiEmpathizeFill,
  RiGenderlessFill,
  RiPriceTag3Fill,
  RiScales3Fill,
  RiStarFill,
} from 'react-icons/ri';

import { TextAreaControlled } from '../../components/TextAreaControlled';
import { InputControlled } from '../../components/InputControlled';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

interface FormCreateDataProps {
  name: string;
  birthDate: string;
  weight: string;
  breed: string;
  tags: string;
  description: string;
  sex: 'male' | 'female';
}

const createNewPetSchema = yup.object({
  name: yup.string().max(30, 'Nome muito grande').required('Infome o nome do pet.'),
  // birthDate: yup.date().required('Infome a data.'),
  // weight: yup
  //   .string()
  //   .max(2, 'Apenas dois caracteres')
  //   .min(1, 'Informe o peso.')
  //   .required('Informe o peso'),
  // breed: yup.string().required('Infome a Raça.'),
  // tags: yup.string().required('Infome às tags'),
  // description: yup.string().required('Infome a descrição'),
});

export function CreatePet() {
  const [sex, setSex] = useState('male');
  const [category, setCategory] = useState('cat');
  const [photo, setPhoto] = useState();
  const [preview, setPreview] = useState('');

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreateDataProps>({
    resolver: yupResolver(createNewPetSchema),
  });

  const navigate = useNavigate();

  function handleNewPet(data: any) {
    // navigate('/dashboard');
  }

  function handleImage(event: any) {
    if (event.target.files) {
      const data = new FormData();

      data.append('photo', event.target.files[0]);
      data.append('id', 'ff8080818473132a01847313819a0000');

      api
        .post('/uploads/pet', data)
        .then(response => {
          setPhoto(response.data.image_url);
          setPreview(URL.createObjectURL(event.target.files[0]));
        })
        .catch(err => {
          console.log(err);

          alert('Não foi possível enviar a imagem.');
        });
    }
  }

  return (
    <Container>
      <Navbar
        loggedIn
        userAvatar="https://ui-avatars.com/api/?name=Rodrigo+Celvo&background=random"
      />
      <Content>
        <Header>
          <Title>Criar pet</Title>
          <Button onClick={() => navigate('/dashboard')}>Marcar como adotado</Button>
        </Header>

        <Form onSubmit={handleSubmit(handleNewPet)}>
          <AnimalImageContainer>
            <AvatarInput>
              <label htmlFor="avatar">
                {preview ? (
                  <img src={preview} />
                ) : (
                  <>
                    <div>
                      <RiCameraFill />
                      <p>Selecione uma imagem</p>
                    </div>
                  </>
                )}
                <input
                  name="avatar"
                  type="file"
                  id="avatar"
                  onChange={handleImage}
                  accept="image/png, image/jpeg"
                />
              </label>
            </AvatarInput>
          </AnimalImageContainer>

          <AnimalFormContainer>
            <InputControlled
              label="Nome do pet"
              control={control}
              name="name"
              placeholder="Nome do pet"
              icon={RiAddCircleFill}
              error={errors.name?.message}
              isErrored={!!errors.name?.message}
            />

            <FormGroup>
              <InputControlled
                label="Data de nascimento"
                control={control}
                name="birthDate"
                placeholder="Date de nascimento"
                type="date"
                icon={RiCalendar2Fill}
                error={errors.birthDate?.message}
                isErrored={!!errors.birthDate?.message}
                style={{ width: '70px' }}
              />

              <InputControlled
                label="Peso"
                control={control}
                name="weight"
                placeholder="Peso"
                icon={RiScales3Fill}
                minLength={1}
                maxLength={2}
                error={errors.weight?.message}
                isErrored={!!errors.weight?.message}
                style={{ width: '30px', marginTop: '0px' }}
              />
            </FormGroup>

            <InputControlled
              label="Raça"
              control={control}
              name="breed"
              placeholder="Raça"
              icon={RiEmpathizeFill}
              error={errors.breed?.message}
              isErrored={!!errors.breed?.message}
            />

            <OptionContainer>
              <StyledRoot defaultValue="male" id="sex" onValueChange={setSex}>
                <p>
                  <RiGenderlessFill /> Sexo
                </p>
                <Option>
                  <StyledRadio value="male" id="male">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="male">Macho</label>
                </Option>
                <Option>
                  <StyledRadio value="female" id="female">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="female">Fêmea</label>
                </Option>
              </StyledRoot>
            </OptionContainer>

            <OptionContainer>
              <StyledRoot defaultValue="cat" onValueChange={setCategory}>
                <p>
                  <RiStarFill /> Categoria
                </p>
                <Option>
                  <StyledRadio value="cat" id="cat">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="cat">Gato</label>
                </Option>
                <Option>
                  <StyledRadio value="dog" id="dog">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="dog">Cachorro</label>
                </Option>
                <Option>
                  <StyledRadio value="rabbit" id="rabbit">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="rabbit">Coelho</label>
                </Option>
                <Option>
                  <StyledRadio value="turtle" id="turtle">
                    <StyledIndicator />
                  </StyledRadio>
                  <label htmlFor="turtle">Tartaruga</label>
                </Option>
              </StyledRoot>
            </OptionContainer>

            <InputControlled
              label="Tags"
              control={control}
              name="tags"
              placeholder="Tags, separadas por virgulas"
              icon={RiPriceTag3Fill}
              error={errors.tags?.message}
              isErrored={!!errors.tags?.message}
            />

            <TextAreaControlled
              label="Descrição"
              control={control}
              name="description"
              placeholder="Descrição"
              icon={RiEdit2Fill}
              error={errors.description?.message}
              isErrored={!!errors.description?.message}
            />
            <Button type="submit">Cadastrar pet</Button>
          </AnimalFormContainer>
        </Form>
      </Content>
    </Container>
  );
}

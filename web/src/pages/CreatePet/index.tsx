import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

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
import { useAuth } from '../../hooks/useAuth';

interface PetDataProps {
  name: string;
  birthDate: string;
  weight: string;
  breed: string;
  tags: string;
  description: string;
  sex: 'male' | 'female';
  category: string;
  imgUrl: string;
  adopted: boolean;

  author: {
    id: string;
  };
}

const createNewPetSchema = yup.object({
  name: yup.string().max(30, 'Nome muito grande').required('Infome o nome do pet.'),
  birthDate: yup.date().required('Infome a data.'),
  weight: yup
    .string()
    .max(2, 'Apenas dois caracteres')
    .min(1, 'Informe o peso.')
    .required('Informe o peso'),
  breed: yup.string().required('Infome a Raça.'),
  tags: yup.string().required('Infome às tags'),
  description: yup.string().required('Infome a descrição'),
});

export function CreatePet() {
  const [petSex, setPetSex] = useState('male');
  const [petCategory, setPetCategory] = useState('cat');
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState('');
  const [petImageId, setPetImageId] = useState('');
  const [petAdopted, setPetAdopted] = useState(false);
  const [selectImageError, setSelectImageError] = useState('');
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PetDataProps>({
    resolver: yupResolver(createNewPetSchema),
  });

  const navigate = useNavigate();

  async function handleNewPet({ name, birthDate, weight, breed, tags, description }: PetDataProps) {
    setLoading(true);

    try {
      if (!petImageId) return;

      if (!photo) {
        setLoading(false);
        return setSelectImageError('Selecione uma imagem.');
      }

      const response = await api.post('/pets', {
        name,
        birthDate,
        weight,
        breed,
        tags,
        adopted: petAdopted,
        sex: petSex,
        category: petCategory,
        imgUrl: `http://localhost:3333/images/pets/${petImageId}.png`,
        description,
        author: {
          id: user.id,
        },
      });

      const { id } = response.data;

      await api
        .patch(`/pets/image/${petImageId}/${id}`, {
          imgUrl: `http://localhost:3333/images/pets/${id}.png`,
        })
        .then(() => {
          setLoading(true);
          setPetImageId(id);
          setTimeout(() => {
            navigate('/dashboard');
          }, 1000);
        });
    } catch (err) {
      console.log(err);
      navigate('/dashboard');
      setLoading(false);
      alert(`Oops! Parece que tem algo errado. Já estamos trabalhando para corrigir.`);
    }
  }

  async function handleEditPet({
    name,
    birthDate,
    weight,
    breed,
    tags,
    description,
  }: PetDataProps) {
    setLoading(true);

    try {
      await api.put(`/pets/${params.id}`, {
        name,
        birthDate,
        weight,
        breed,
        tags,
        adopted: petAdopted,
        sex: petSex,
        category: petCategory,
        imgUrl: `http://localhost:3333/images/pets/${params.id}.png`,
        description,
      });

      navigate('/dashboard');
    } catch (err) {
      console.log(err);

      alert(`Edt: Oops! Parece que tem algo errado. Já estamos trabalhando para corrigir.`);
      setLoading(false);
    } finally {
    }
  }

  async function fetchPet() {
    try {
      const response = await api.get(`/pets/${params.id}`);
      const petResponse: PetDataProps = response.data;

      const birthDateFormatted = format(new Date(petResponse.birthDate), 'yyyy-MM-dd');

      setValue('name', petResponse.name);
      setValue('birthDate', birthDateFormatted);
      setValue('weight', petResponse.weight);
      setValue('breed', petResponse.breed);
      setValue('tags', petResponse.tags);
      setValue('description', petResponse.description);

      setPhoto(petResponse.imgUrl);

      setPetAdopted(petResponse.adopted);

      setPetSex(petResponse.sex);
      setPetCategory(petResponse.category);
    } catch (err) {
      console.log(err);
      // alert('Não foi possível encontrar o pet');
      // navigate('/dashboard');
    }
  }

  useEffect(() => {
    if (params.id) {
      setPetImageId(params.id);
      fetchPet();
    }

    if (!params.id) {
      const generateUuid = uuidv4();
      setPetImageId(generateUuid);
    }
  }, []);

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const data = new FormData();

      data.append('photo', event.target.files[0]);
      data.append('id', petImageId);

      const previewImg = URL.createObjectURL(event.target.files[0]);

      if (previewImg) {
        setSelectImageError('');
      }

      api
        .post('/uploads/pet', data)
        .then(response => {
          setPreview(previewImg);
          setPhoto(response.data.image_url);
        })
        .catch(err => {
          console.log(err);

          setSelectImageError('Não foi possível enviar a imagem, tente outra.');
        });
    }
  }

  return (
    <Container>
      <Navbar loggedIn />
      <Content>
        <Header>
          <Title>{params.id ? 'Editar' : 'Criar'} pet</Title>
          {params.id && (
            <Button disabled={petAdopted} onClick={() => setPetAdopted(!petAdopted)}>
              {!petAdopted ? ' Marcar como adotado' : 'Adotado'}
            </Button>
          )}
        </Header>

        <Form onSubmit={handleSubmit(!params.id ? handleNewPet : handleEditPet)}>
          <AnimalImageContainer>
            <AvatarInput>
              <label htmlFor="avatar">
                {preview || photo ? (
                  <img src={preview || photo} style={{ backgroundColor: '#fff' }} />
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
            <p>{!!selectImageError && selectImageError}</p>
          </AnimalImageContainer>

          <AnimalFormContainer>
            <InputControlled
              label="Nome do pet"
              control={control}
              name="name"
              placeholder="Nome do pet"
              icon={RiAddCircleFill}
              maxLength={20}
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
              <StyledRoot defaultValue={petSex} id="sex" onValueChange={setPetSex} value={petSex}>
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
              <StyledRoot
                defaultValue={petCategory}
                onValueChange={setPetCategory}
                value={petCategory}
              >
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
            <Button type="submit" disabled={loading} loading={!!loading}>
              {!params.id ? 'Cadastrar' : 'Editar'} pet
            </Button>
          </AnimalFormContainer>
        </Form>
      </Content>
    </Container>
  );
}

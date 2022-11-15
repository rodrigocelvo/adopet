import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { AnimalCard, AnimalCardProps } from '../../components/AnimalCard';
import { Button } from '../../components/Button';

import { ANIMALS } from '../../utils/animals';

import petAdoptionImg from '../../assets/pet-adoption.svg';
import { Container, Header, Title, Content, NonePet, AnimalContent } from './styles';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

interface PetProps {
  id?: string;
  imgUrl: string;
  name: string;
  genre?: string;

  author: {
    id: string;
    city?: string;
    uf?: string;
  };
}

export function Dashboard() {
  const [pets, setPets] = useState<AnimalCardProps[]>([]);
  const { user } = useAuth();

  const navigate = useNavigate();

  async function fetchPets() {
    try {
      const response = await api.get('/pets');
      const responsePetData = response.data;

      const myPets = responsePetData.filter((pet: PetProps) => pet.author.id === user.id);
      setPets(myPets);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <Navbar
        loggedIn
        userAvatar="https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg"
      />

      <Container>
        <Header>
          <Title>Pets para adoção</Title>
          <Button onClick={() => navigate('/pet/new')}>Novo bichinho</Button>
        </Header>
        <Content>
          {pets.length === 0 && (
            <NonePet>
              <strong>Você não publicou nenhum pet para adoção.</strong>
              <img src={petAdoptionImg} />
            </NonePet>
          )}

          <AnimalContent>
            {pets.map(animal => (
              <AnimalCard
                key={animal.id}
                loggedIn={true}
                name={animal.name}
                imgUrl="https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg"
              />
            ))}
          </AnimalContent>
        </Content>
      </Container>
    </>
  );
}

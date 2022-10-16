import React from 'react';
import { Navbar } from '../../components/Navbar';
import { AnimalCard } from '../../components/AnimalCard';
import { Button } from '../../components/Button';

import { ANIMALS } from '../../utils/animals';

import petAdoptionImg from '../../assets/pet-adoption.svg';
import { Container, Header, Title, Content, NonePet, AnimalContent } from './styles';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { user } = { user: true };

  const navigate = useNavigate();

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
          {ANIMALS.length === 0 && (
            <NonePet>
              <strong>Você não publicou nenhum pet para adoção.</strong>
              <img src={petAdoptionImg} />
            </NonePet>
          )}

          <AnimalContent>
            {ANIMALS.map(animal => (
              <AnimalCard loggedIn={true} name={animal.name} photo={animal.imgUrl} />
            ))}
          </AnimalContent>
        </Content>
      </Container>
    </>
  );
}

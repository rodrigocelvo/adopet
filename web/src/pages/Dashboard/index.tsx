import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { AnimalCard, AnimalCardProps } from '../../components/AnimalCard';
import { Button } from '../../components/Button';

import petAdoptionImg from '../../assets/pet-adoption.svg';
import { Container, Header, Title, Content, NonePet, AnimalContent } from './styles';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Modal, ToastDeletedPet } from '../../components/Modal';
import { useAuth } from '../../hooks/auth';

import { ToastCreatePet } from '../CreatePet';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface PetProps {
  id: string;
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  }, [pets]);

  return (
    <>
      <Navbar loggedIn modalIsOpen={modalIsOpen} />

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
              <AlertDialog.Root key={animal.id} onOpenChange={() => setModalIsOpen(!modalIsOpen)}>
                <AnimalCard id={animal.id} name={animal.name} imgUrl={animal.imgUrl} loggedIn />

                <Modal petId={animal.id} />
              </AlertDialog.Root>
            ))}
          </AnimalContent>
        </Content>
        <ToastCreatePet />
        <ToastDeletedPet />
      </Container>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { PetCard, PetCardProps } from '../../components/PetCard';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';

import { Container, EmptyText } from './styles';
import { PetSearchNavigationProps } from '../../@types/navigation';
import { useTheme } from 'styled-components';

interface SearchProps {
  id: string;
  name: string;
  sex: string;
  breed: string;
  tags: string;

  author: {
    uf: string;
    city: string;
  };
}

interface PetProps {
  category: string;
  search?: string;
}

export function PetSearch() {
  const navigation = useNavigation();
  const [pets, setPets] = useState<PetCardProps[]>([]);
  const [petCategory, setPetCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  const route = useRoute();
  const { category, search } = route.params as PetSearchNavigationProps;

  async function fetchPets() {
    setLoading(true);
    if (!category && !search) {
      try {
        const response = await api.get('/pets');
        setPets(response.data);
        setPetCategory('Pets para adoção');
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const response = await api.get('/pets');

        const myPets = response.data.filter(
          (pet: PetProps) => pet.category === category,
        );
        setPets(myPets);

        const categories = {
          dog: 'Cachorro',
          cat: 'Gato',
          rabbit: 'Coelho',
          turtle: 'Tartaruga',
        };

        // @ts-ignore
        setPetCategory('Lista de ' + categories[category]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }

  async function fetchSarchPet() {
    setLoading(true);
    try {
      const response = await api.get('/pets');
      const petResponse = response.data;

      if (!search) return;

      const result = searchPet(petResponse, search.toLowerCase());

      setPets(result);

      setPetCategory('Pesquisa');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const searchPet = function (anyArray: any, searchTerm: any) {
    return anyArray.filter((obj: SearchProps) => {
      if (obj.name.toLowerCase() === searchTerm) {
        return obj.name;
      }

      if (obj.id === searchTerm) {
        return obj.id;
      }

      if (obj.sex.toLowerCase() === searchTerm) {
        return obj.sex;
      }

      if (obj.breed.toLowerCase() === searchTerm) {
        return obj.breed;
      }

      if (obj.tags.toLowerCase().includes(searchTerm)) {
        return obj.tags;
      }

      if (obj.author.uf.toLowerCase() === searchTerm) {
        return obj.author.uf;
      }

      if (obj.author.city.toLowerCase() === searchTerm) {
        return obj.author.city;
      }

      return false;
    });
  };

  useEffect(() => {
    if (category || (!category && !search)) {
      fetchPets();
    }

    if (search) {
      fetchSarchPet();
    }
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header title={petCategory} showBackButton onBack={handleGoBack} />

      <FlatList
        data={pets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PetCard
            data={item}
            onPress={() => navigation.navigate('pet', { id: item.id })}
            style={{ marginBottom: 12 }}
          />
        )}
        ListEmptyComponent={
          <EmptyText>
            Ooops... parece que a lista {'\n'}resultados para sua pesquisa.
          </EmptyText>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 40,
        }}
      />
    </Container>
  );
}

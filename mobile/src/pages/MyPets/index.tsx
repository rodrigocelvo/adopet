import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { PetCard, PetCardProps } from '../../components/PetCard';
import { Loading } from '../../components/Loading';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, EmptyText } from './styles';

export function MyPets() {
  const navigation = useNavigation();
  const [pets, setPets] = useState<PetCardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  interface MyPetProps {
    adoptedBy: string;
  }

  async function fetchMyPets() {
    setLoading(true);
    try {
      const response = await api.get('/pets');

      const result = response.data.filter(
        (pet: MyPetProps) => pet.adoptedBy === user.id,
      );

      setPets(result);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMyPets();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header title="Pets adotados" showBackButton />
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
          <EmptyText>Você não adotou {'\n'}nenhum bichinho.</EmptyText>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 120,
        }}
      />
    </Container>
  );
}

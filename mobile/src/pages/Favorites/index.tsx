import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';
import { PetCard, PetCardProps } from '../../components/PetCard';
import { Loading } from '../../components/Loading';

import { Container, EmptyText } from './styles';

export function Favorites() {
  const navigation = useNavigation();
  const [pets, setPets] = useState<PetCardProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchFavoritePet() {
    try {
      const response = await AsyncStorage.getItem('@Adopet:favorites');

      const data = response ? JSON.parse(response) : [];

      setPets(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFavoritePet();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header title="Favoritos" showBackButton />
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
          <EmptyText>Você não tem {'\n'}nenhum pet favorito.</EmptyText>
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

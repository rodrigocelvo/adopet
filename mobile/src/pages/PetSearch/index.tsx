import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { PetCard } from '../../components/PetCard';
import { ANIMALS } from '../../utils/animals';

import { Container } from './styles';

export function PetSearch() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Pets para adoção" goBack style={{ marginLeft: 50 }} />

      <FlatList
        data={ANIMALS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PetCard
            data={item}
            onPress={() => navigation.navigate('pet')}
            style={{ marginBottom: 12 }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

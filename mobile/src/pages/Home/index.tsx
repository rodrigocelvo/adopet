import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { useFocusEffect } from '@react-navigation/native';

import {
  Container,
  ScrollView,
  Header,
  ContentPadding,
  User,
  Avatar,
  Username,
  BannerButton,
  Banner,
  SectionTitle,
  PetCategorySelection,
  Adoption,
} from './styles';

import bannerImg from '../../assets/banner.png';
import { PetCategory } from '../../components/PetCategory';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PetCard, PetCardProps } from '../../components/PetCard';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SmallButton } from '../../components/SmallButton';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const [pets, setPets] = useState<PetCardProps[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();
  const { logOut, user } = useAuth();

  async function fetchPets() {
    try {
      const response = await api.get('/pets/lasts');
      setPets(response.data);
    } catch (err) {
      console.log();
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPets();
    }, []),
  );

  return (
    <>
      <ScrollView>
        <Container>
          <ContentPadding>
            <Header>
              <User onPress={() => navigation.navigate('profile')}>
                <Avatar
                  source={{
                    uri: !user.avatar
                      ? `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${user.name}`
                      : user.avatar,
                  }}
                />
                <Username>{user.name}</Username>
              </User>
              <SmallButton
                icon="shut-down-line"
                size={24}
                color={theme.COLORS.ALERT}
                onPress={logOut}
              />
            </Header>

            <SearchBar icon="search-line" placeholder="Pesquisar..." />

            <BannerButton>
              <Banner source={bannerImg} />
            </BannerButton>

            <SectionTitle>Categorias de pet</SectionTitle>
          </ContentPadding>
          <PetCategorySelection
            contentContainerStyle={{
              paddingLeft: 20,
              paddingRight: 40,
            }}>
            <PetCategory
              icon="dog"
              title="Cachorro"
              onPress={() =>
                navigation.navigate('petsearch', { category: 'dog' })
              }
            />
            <PetCategory
              icon="cat"
              title="Gato"
              onPress={() =>
                navigation.navigate('petsearch', { category: 'cat' })
              }
            />
            <PetCategory
              icon="rabbit"
              title="Coelho"
              onPress={() =>
                navigation.navigate('petsearch', { category: 'rabbit' })
              }
            />
            <PetCategory
              icon="turtle"
              title="Tartaruga"
              onPress={() =>
                navigation.navigate('petsearch', { category: 'turtle' })
              }
            />
          </PetCategorySelection>

          <Adoption>
            <SectionTitle>Novos bicinhos</SectionTitle>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('petsearch', { category: '', search: '' })
              }>
              <SectionTitle>Ver mais</SectionTitle>
            </TouchableOpacity>
          </Adoption>

          <FlatList
            data={pets}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PetCard
                data={item}
                onPress={() =>
                  navigation.navigate('pet', {
                    id: item.id,
                  })
                }
                style={{ marginRight: 12 }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              paddingLeft: 20,
              paddingRight: 40,
            }}
          />
        </Container>
      </ScrollView>
    </>
  );
}

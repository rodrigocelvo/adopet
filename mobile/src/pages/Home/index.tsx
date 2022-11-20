import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { useFocusEffect } from '@react-navigation/native';

import { Photo } from '../../components/Photo';
import { SmallButton } from '../../components/SmallButton';
import { SearchBar } from '../../components/SearchBar';
import { PetCategory } from '../../components/PetCategory';
import { PetCard, PetCardProps } from '../../components/PetCard';
import { Loading } from '../../components/Loading';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ScrollView,
  Header,
  Adopted,
  AdoptedText,
  ContentPadding,
  User,
  Username,
  BannerButton,
  Banner,
  SectionTitle,
  PetCategorySelection,
  Adoption,
} from './styles';

import bannerImg from '../../assets/banner.png';

export function Home() {
  const [pets, setPets] = useState<PetCardProps[]>([]);
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(true);

  const navigation = useNavigation();
  const THEME = useTheme();
  const { logOut, user } = useAuth();

  async function fetchPets() {
    setLoading(true);
    try {
      const response = await api.get('/pets/lasts');
      setPets(response.data);

      const countResponse = await api.get('/pets/count');

      setCount(countResponse.data.count);
    } catch (err) {
      console.log();
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchPets();
      setLoading(false);
    }, []),
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAvatar(user.avatar);
    }, 10);
    setLoading(false);
  }, [user.avatar]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <Container>
        <ContentPadding>
          <Header>
            <User onPress={() => navigation.navigate('profile')}>
              <Photo name={user.name} avatar={avatar} size={48} />
              <Username>{user.name}</Username>
            </User>
            <SmallButton
              icon="shut-down-line"
              size={24}
              color={THEME.COLORS.ALERT}
              onPress={logOut}
            />
          </Header>

          <SearchBar icon="search-line" placeholder="Pesquisar..." />

          <BannerButton
            onPress={() =>
              navigation.navigate('petsearch', { search: 'adotar' })
            }>
            <Banner source={bannerImg} />
          </BannerButton>

          <Adopted>
            <AdoptedText>
              +{count} <SectionTitle>Bichinhos para adoção</SectionTitle>
            </AdoptedText>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('petsearch', { search: 'adotados' })
              }>
              <SectionTitle>Pets Adotados</SectionTitle>
            </TouchableOpacity>
          </Adopted>

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
            <SectionTitle>Ver todos</SectionTitle>
          </TouchableOpacity>
        </Adoption>

        <FlatList
          data={pets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PetCard
              data={item}
              sm
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
  );
}

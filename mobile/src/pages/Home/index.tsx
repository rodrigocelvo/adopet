import React from 'react';
import { FlatList } from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import { SearchBar } from '../../components/SearchBar';

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
import { PetCard } from '../../components/PetCard';

import { ANIMALS } from '../../utils/animals';
import { useNavigation } from '@react-navigation/native';
import { SmallButton } from '../../components/SmallButton';

export function Home() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <Container>
          <ContentPadding>
            <Header>
              <User>
                <Avatar
                  source={{ uri: 'http://github.com/rodrigocelvo.png' }}
                />
                <Username>Rodrigo Celvo</Username>
              </User>
              <SmallButton icon="notification-line" size={24} />
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
            <PetCategory icon="dog" title="Cachorro" />
            <PetCategory icon="cat" title="Gato" />
            <PetCategory icon="turtle" title="Tartaruga" />
            <PetCategory icon="rabbit" title="Coelho" />
          </PetCategorySelection>

          <Adoption>
            <SectionTitle>Adotar Pet</SectionTitle>
            <TouchableOpacity>
              <SectionTitle>Ver mais</SectionTitle>
            </TouchableOpacity>
          </Adoption>

          <FlatList
            data={ANIMALS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PetCard data={item} onPress={() => navigation.navigate('pet')} />
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

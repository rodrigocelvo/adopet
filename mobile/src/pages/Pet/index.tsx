import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Container,
  // Header,
  PetImage,
  Linear,
  Content,
  Heading,
  PetName,
  PetLocalization,
  LikeButton,
  UserProfile,
  UserContent,
  UserAdCreate,
  PetCategorySelection,
  UserAvatar,
  UserName,
  SectionTitle,
  InfoContainer,
  PetDescription,
  Adoption,
  Gap,
} from './styles';
import { useTheme } from 'styled-components';
import { PetCategory } from '../../components/PetCategory';
import { PetDetails } from '../../components/PetDetails';
import { SmallButton } from '../../components/SmallButton';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import RemixIcon from 'react-native-remix-icon';

export function Pet() {
  const theme = useTheme();

  return (
    <Container>
      <PetImage
        source={{
          uri: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
        }}>
        <Header goBack />
        <LinearGradient colors={theme.COLORS.FOOTER}>
          <Linear>
            <UserProfile>
              <UserAvatar
                source={{ uri: 'https://github.com/rodrigocelvo.png' }}
              />
              <UserContent>
                <UserAdCreate>Publicado por: </UserAdCreate>
                <UserName>Rodrigo Celvo</UserName>
              </UserContent>
            </UserProfile>
            <LikeButton>
              <RemixIcon name="heart-line" color={theme.COLORS.ALERT} />
            </LikeButton>
          </Linear>
        </LinearGradient>
      </PetImage>
      <Content>
        <Heading>
          <PetName>ada</PetName>
          <PetLocalization>São Paulo, SP</PetLocalization>
        </Heading>

        <SectionTitle>Informações</SectionTitle>
        <InfoContainer>
          <PetDetails title="Macho" description="Sexo" />
          <Gap />
          <PetDetails title="Vira-lata" description="Raça" />
          <Gap />
          <PetDetails title="2 meses" description="Idade" />
          <Gap />
          <PetDetails title="2kg" description="Peso" />
        </InfoContainer>

        <SectionTitle>Tags</SectionTitle>
      </Content>
      <InfoContainer>
        <PetCategorySelection
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 40,
          }}>
          <PetCategory title="Carinhoso" />
          <PetCategory title="Manhoso" />
          <PetCategory title="Manhoso" />
          <PetCategory title="Manhoso" />
          <PetCategory title="Manhoso" />
          <PetCategory title="Manhoso" />
        </PetCategorySelection>
      </InfoContainer>

      <Content>
        <SectionTitle>Descrição</SectionTitle>
        <PetDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          gravida vel magna sed faucibus. Proin a porttitor purus, et molestie
          orci. Mauris quis egestas velit. Maecenas id nunc commodo, feugiat
          orci tempus, rutrum metus. Pellentesque condimentum leo vel ultrices
          sodales.
        </PetDescription>

        <SectionTitle>Se interessou?</SectionTitle>
        <Adoption>
          <SmallButton icon="whatsapp-line" color={theme.COLORS.PRIMARY_500} />
          <Gap />
          <SmallButton icon="mail-line" color={theme.COLORS.PRIMARY_500} />
          <Gap />
          <Button>Adotar</Button>
        </Adoption>
      </Content>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { differenceInYears, differenceInMonths } from 'date-fns';
import { Alert, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import {
  Container,
  // Header,
  PetImage,
  Linear,
  Content,
  Heading,
  PetName,
  PetLocalization,
  AdoptedBanner,
  AdoptedBannerText,
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
import { Loading } from '../../components/Loading';
import RemixIcon from 'react-native-remix-icon';

import { PetNavigationProps } from '../../@types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';

interface PetProps {
  id: string;
  name: string;
  weight: string;
  birthDate: string;
  sex: string;
  tags: string;
  description: string;
  category: string;
  breed: string;
  imgUrl: string;
  adopted: boolean;

  author: {
    name: string;
    email: string;
    phone: string;
    uf: string;
    city: string;
  };
}

interface PetResponse extends PetProps {
  data: PetProps;
}

export function Pet() {
  const theme = useTheme();
  const [favorite, setFavorite] = useState(false);
  const [pet, setPet] = useState<PetResponse>({} as PetResponse);
  const [loading, setLoading] = useState(true);
  const [petBirthDate, setPetBirthDate] = useState('');
  const [tags, setTags] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  const { id } = route.params as PetNavigationProps;

  async function fetchPet() {
    try {
      setLoading(true);
      const response = await api.get(`/pets/${id}`);

      setPet(response.data);
      setTags(response.data.tags.split(','));
      calculateAge(response.data.birthDate);

      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAdoptPet(petId: string) {
    try {
      setLoading(true);
      await api.patch(`/pets/${petId}/adopt`, {
        adopted: true,
      });

      Alert.alert(
        'Adoção',
        'Parabéns, o bichinho ficará muito feliz em ter uma família.',
      );

      navigation.navigate('home');

      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function calculateAge(date: string) {
    const birth = new Date(date);

    const differenceYear = differenceInYears(Date.now(), birth);
    const differenceMouth = differenceInMonths(Date.now(), birth);

    if (differenceYear > 0) {
      setPetBirthDate(`${differenceYear} anos`);
    } else {
      setPetBirthDate(`${differenceMouth} meses`);
    }
  }

  function sendMail(petName: string, authorName: string, email: string) {
    const message = `Olá, ${authorName}, 
    Estou entrando em contato pois gostaria de adotar ${petName}.`;

    MailComposer.composeAsync({
      subject: `Adoção de: ${petName}`,
      recipients: [email],
      body: message,
    });
  }

  function sendWhatsapp(petName: string, authorName: string, whatsapp: string) {
    const message = `Olá, ${authorName}, 
    Estou entrando em contato pois gostaria de adotar ${petName}.`;

    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
  }

  useEffect(() => {
    fetchPet();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <PetImage source={{ uri: `${pet.imgUrl}` }}>
        <Header goBack />
        <LinearGradient colors={theme.COLORS.FOOTER}>
          {pet.adopted && (
            <AdoptedBanner>
              <AdoptedBannerText>Adotado</AdoptedBannerText>
            </AdoptedBanner>
          )}
          <Linear>
            <UserProfile>
              <UserAvatar
                source={{
                  uri: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${pet.author.name}`,
                }}
              />

              <UserContent>
                <UserAdCreate>Publicado por: </UserAdCreate>
                <UserName>{pet.author.name}</UserName>
              </UserContent>
            </UserProfile>
            <LikeButton onPress={() => setFavorite(!favorite)}>
              <RemixIcon
                name={favorite ? 'heart-fill' : 'heart-line'}
                color={theme.COLORS.ALERT}
              />
            </LikeButton>
          </Linear>
        </LinearGradient>
      </PetImage>
      <Content>
        <Heading>
          <PetName>{pet.name}</PetName>
          <PetLocalization>
            {pet.author.city}, {pet.author.uf}
          </PetLocalization>
        </Heading>

        <SectionTitle>Informações</SectionTitle>
        <InfoContainer>
          <PetDetails
            title={pet.sex === 'male' ? 'Macho' : 'Fêmea'}
            description="Sexo"
          />
          <Gap />
          <PetDetails title={pet.breed} description="Raça" />
          <Gap />
          <PetDetails title={petBirthDate} description="Idade" />
          <Gap />
          <PetDetails title={`${pet.weight}kg`} description="Peso" />
        </InfoContainer>

        <SectionTitle>Tags</SectionTitle>
      </Content>
      <InfoContainer>
        <PetCategorySelection
          contentContainerStyle={{
            paddingLeft: 20,
            paddingRight: 40,
          }}>
          {tags.map(tag => (
            <PetCategory
              key={`${tag} + ${Math.floor(Math.random() * 10)}`}
              title={tag}
            />
          ))}
        </PetCategorySelection>
      </InfoContainer>

      <Content>
        <SectionTitle>Descrição</SectionTitle>
        <PetDescription>{pet.description}</PetDescription>

        <SectionTitle>Se interessou?</SectionTitle>
        {!pet.adopted ? (
          <Adoption>
            <SmallButton
              icon="whatsapp-line"
              color={theme.COLORS.PRIMARY_500}
              onPress={() =>
                sendWhatsapp(pet.name, pet.author.name, pet.author.phone)
              }
            />
            <Gap />
            <SmallButton
              icon="mail-line"
              color={theme.COLORS.PRIMARY_500}
              onPress={() =>
                sendMail(pet.name, pet.author.name, pet.author.phone)
              }
            />
            <Gap />
            <Button
              onPress={() =>
                Alert.alert('Adoção', 'Você quer adotar esse bicinho?', [
                  {
                    text: 'Cancelar',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  {
                    text: 'Sim. quero adotar.',
                    onPress: () => handleAdoptPet(pet.id),
                  },
                ])
              }
              disabled={pet.adopted}
              isLoading={loading}>
              Adotar
            </Button>
          </Adoption>
        ) : (
          <Adoption>
            <PetDescription>
              Esse bichinho já foi adotado, mas tenho certeza que você vai
              encontrar outro em nossa lista
            </PetDescription>
          </Adoption>
        )}
      </Content>
    </Container>
  );
}

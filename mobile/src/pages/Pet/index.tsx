import React, { useState, useCallback, useEffect } from 'react';
import { Alert, Linking, Share } from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';
import * as MailComposer from 'expo-mail-composer';

import { PetCategory } from '../../components/PetCategory';
import { PetDetails } from '../../components/PetDetails';
import { SmallButton } from '../../components/SmallButton';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Photo } from '../../components/Photo';
import { PetCardProps } from '../../components/PetCard';

import RemixIcon from 'react-native-remix-icon';
import { useTheme } from 'styled-components';

import { PetNavigationProps } from '../../@types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {
  Container,
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
  UserName,
  SectionTitle,
  InfoContainer,
  PetDescription,
  Adoption,
  Gap,
  AdoptedByContainer,
  AdoptedBy,
  AdoptedByText,
} from './styles';

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
  adoptedBy: string;

  author: {
    id: string;
    name: string;
    email: string;
    phone: string;
    uf: string;
    city: string;
    avatar: string;
  };
}

interface PetAdoptedBy {
  name: string;
  avatar: string;
}

interface PetResponse extends PetProps {
  data: PetProps;
}

interface PetDataProps {
  id: string;
  favorite: boolean;
}

export function Pet() {
  const theme = useTheme();
  const [favorite, setFavorite] = useState(false);
  const [pet, setPet] = useState<PetResponse>({} as PetResponse);
  const [loading, setLoading] = useState(true);
  const [petBirthDate, setPetBirthDate] = useState('');
  const [tags, setTags] = useState([]);
  const [adopetedUserPet, setAdopetedUserPet] = useState<PetAdoptedBy>(
    {} as PetAdoptedBy,
  );

  const route = useRoute();

  const navigation = useNavigation();
  const { user } = useAuth();

  const { id } = route.params as PetNavigationProps;

  async function fetchPet() {
    setLoading(true);
    try {
      const response = await api.get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setPet(response.data);
      setTags(response.data.tags.split(','));
      calculateAge(response.data.birthDate);
      fetchAdoptedPetByUser(response.data.adoptedBy);

      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAdoptPet(petId: string) {
    setLoading(true);
    try {
      await api.post(`/pets/${user.id}/adopt/${petId}`, {
        adopted: true,
      });

      Alert.alert(
        'Adoção',
        'Parabéns, o bichinho ficará muito feliz em ter uma família.',
      );

      navigation.navigate('tab');

      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function calculateAge(date: string) {
    const birth = new Date(date);

    const diferreceDays = differenceInDays(Date.now(), birth);
    const differenceMouth = differenceInMonths(Date.now(), birth);
    const differenceYear = differenceInYears(Date.now(), birth);

    if (diferreceDays <= 59) {
      setPetBirthDate(`${diferreceDays} dias`);
    }

    if (differenceMouth >= 1) {
      setPetBirthDate(`${differenceMouth} meses`);
    }

    if (differenceYear >= 1) {
      setPetBirthDate(`${differenceYear} anos`);
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

  async function handleCodeShare() {
    await Share.share({
      message: `Olhaaaa o bichinho que ta para adoção ${pet.id}`,
    });
  }

  async function fetchFavoritePet() {
    const response = await AsyncStorage.getItem('@Adopet:favorites');

    const data = response ? JSON.parse(response) : [];

    const result = data.filter(
      (item: PetDataProps) => item.id === id && item.favorite === true,
    );

    if (result.length > 0) {
      return setFavorite(true);
    }

    return setFavorite(false);
  }

  async function handleRemoveFavorite(id: string) {
    const response = await AsyncStorage.getItem('@Adopet:favorites');

    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: PetDataProps) => item.id !== id);

    await AsyncStorage.setItem('@Adopet:favorites', JSON.stringify(data));

    setFavorite(!favorite);
  }

  async function handleFavorite() {
    try {
      const newData = {
        id: pet.id,
        name: pet.name,
        imgUrl: pet.imgUrl,
        sex: pet.sex,
        favorite: true,
        author: {
          uf: pet.author.uf,
          city: pet.author.city,
        },
      } as PetCardProps;

      const response = await AsyncStorage.getItem('@Adopet:favorites');
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await AsyncStorage.setItem('@Adopet:favorites', JSON.stringify(data));

      setFavorite(!favorite);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchAdoptedPetByUser(userId: string) {
    try {
      setLoading(true);
      const response = await api.get(`/users/${userId}`);

      const UserPetAdopetResponse: PetAdoptedBy = response.data;

      setAdopetedUserPet(UserPetAdopetResponse);

      setLoading(false);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPet();
      fetchFavoritePet();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <PetImage
        source={{
          uri: `http://localhost:3333/public/images/pets/${pet.imgUrl}`,
        }}>
        <Header
          title="Adoção"
          showBackButton
          showShareButton
          onShare={handleCodeShare}
        />

        <LinearGradient colors={theme.COLORS.FOOTER}>
          {pet.adopted && (
            <AdoptedBanner>
              <AdoptedBannerText>Adotado</AdoptedBannerText>
            </AdoptedBanner>
          )}
          <Linear>
            <UserProfile>
              <Photo
                name={pet.author.name}
                avatar={pet.author.avatar}
                size={64}
              />

              <UserContent>
                <UserAdCreate>Publicado por: </UserAdCreate>
                <UserName>{pet.author.name}</UserName>
              </UserContent>
            </UserProfile>
            <LikeButton
              onPress={() =>
                favorite ? handleRemoveFavorite(pet.id) : handleFavorite()
              }>
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

        {!pet.adopted ? (
          <>
            <SectionTitle>Se interessou?</SectionTitle>
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
                  sendMail(pet.name, pet.author.name, pet.author.email)
                }
              />
              <Gap />
              <Button
                onPress={() =>
                  Alert.alert(
                    'Adoção',
                    'Você tem certeza que quer adotar esse bichinho?',
                    [
                      {
                        text: 'Cancelar',
                        onPress: () => {},
                        style: 'cancel',
                      },
                      {
                        text: 'Sim, quero adotar',
                        onPress: () => handleAdoptPet(pet.id),
                      },
                    ],
                  )
                }
                disabled={pet.adopted}
                isLoading={loading}>
                Adotar
              </Button>
            </Adoption>
          </>
        ) : (
          <>
            {pet.adoptedBy !== user.id && (
              <>
                <SectionTitle>Adotado</SectionTitle>
                <Adoption>
                  <PetDescription>
                    {pet.author.id !== pet.adoptedBy
                      ? 'Esse bichinho já foi adotado, mas tenho certeza que você vai encontrar outro em nossa lista.'
                      : 'O autor desativou esse anúncio.'}
                  </PetDescription>
                </Adoption>
              </>
            )}

            {adopetedUserPet && pet.adoptedBy !== pet.author.id && (
              <AdoptedByContainer>
                <SectionTitle>Quem adotou?</SectionTitle>
                <AdoptedBy>
                  <Photo
                    avatar={adopetedUserPet.avatar}
                    name={adopetedUserPet.name}
                    size={64}
                  />
                  <AdoptedByText>{adopetedUserPet.name}</AdoptedByText>
                </AdoptedBy>
              </AdoptedByContainer>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

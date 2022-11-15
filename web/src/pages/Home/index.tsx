import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { InfoCard } from '../../components/InfoCard';
import { AnimalCard, AnimalCardProps } from '../../components/AnimalCard';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import {
  Container,
  Main,
  Intro,
  Title,
  Wave,
  Description,
  Animal,
  Content,
  SubTitle,
  Text,
  CardContainer,
  AnimalContainer,
  AnimalContent,
  ButtonContainer,
  FaqContainer,
  FaqContent,
  FaqTitle,
  FaqDescription,
} from './styles';

import catImg from '../../assets/cat.png';
import waveImg from '../../assets/wave2.svg';
import card1Img from '../../assets/card1.svg';
import card2Img from '../../assets/card2.svg';
import card3Img from '../../assets/card3.svg';
import { api } from '../../services/api';

export function Home() {
  const navigate = useNavigate();
  const [pets, setPets] = useState<AnimalCardProps[]>([]);

  async function fetchPets() {
    try {
      const response = await api.get('/pets/lasts');
      setPets(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Main>
          <Intro>
            <Title>
              Olá, Humano. <br /> Você precisa de um <span>amigo?</span>
            </Title>
            <Description>
              tente adotar um bichinho e você vai ser muito feliz, eu prometo.
            </Description>
            <Button style={{ width: '300px' }} onClick={() => navigate('/adoption')}>
              QUERO ADOTAR
            </Button>
          </Intro>
          <Animal src={catImg} />
        </Main>

        <Wave src={waveImg} />

        <Content>
          <SubTitle>Conheça a Adopet</SubTitle>
          <Text>
            Nós fazemos a conexão entre quem deseja adotar um pet com às ongs. Aqui você pode
            encontrar seu amiguinho. Adote seu pet e torne seu mundo mais feliz Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Veniam at, neque sed reprehenderit delectus
            dolores, minima ducimus ipsa asperiores nulla molestiae nam laboriosam possimus eos.
            Ipsa iusto labore eius quam!
          </Text>

          <SubTitle>Por quê adotar?</SubTitle>
          <CardContainer>
            <InfoCard
              title="Nesse exato momento,"
              description="existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu."
              icon={card1Img}
            />
            <InfoCard
              title="E não há recompensa maior"
              description="do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho."
              icon={card2Img}
            />
            <InfoCard
              title="Pensando bem, a pergunta é outra:"
              description="se você pode mudar o destino de um animal de rua, por que não faria isso?"
              icon={card3Img}
            />
          </CardContainer>

          <SubTitle>Novos bichinhos</SubTitle>
          <AnimalContainer>
            <AnimalContent>
              {pets.map(animal => (
                <AnimalCard
                  key={animal.id}
                  id={animal.id}
                  name={animal.name}
                  author={animal.author}
                  genre={animal.genre}
                  imgUrl={animal.imgUrl}
                />
              ))}
            </AnimalContent>
          </AnimalContainer>
        </Content>

        <ButtonContainer>
          <Button onClick={() => navigate('/adoption')}>QUERO ADOTAR</Button>
        </ButtonContainer>

        <FaqContainer>
          <FaqContent>
            <FaqTitle>DÚVIDAS DE COMO ADOTAR?</FaqTitle>
            <FaqDescription>
              Na área de Perguntas Frequentes, você encontra as respostas para as principais dúvidas
              sobre adoção. Caso não encontre o que procura, entre em contato conosco que teremos o
              maior prazer em ajudar você.
            </FaqDescription>

            <ButtonContainer>
              <Button onClick={() => navigate('/faq')}>IR PARA PERGUNTAS FREQUENTES</Button>
            </ButtonContainer>
          </FaqContent>
        </FaqContainer>
      </Container>
      <Footer />
    </>
  );
}

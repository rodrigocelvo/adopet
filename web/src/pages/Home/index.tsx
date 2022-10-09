import React from 'react';

import catImg from '../../assets/cat.png';
import waveImg from '../../assets/wave2.svg';

import {
  Container,
  Main,
  Intro,
  Title,
  TitleSpan,
  Description,
  Animal,
  Content,
  SubTitle,
  Text,
  CardContainer,
  AnimalContainer,
  AnimalContent,
  ButtonContainer,
  BannerContainer,
  FaqContainer,
  FaqContent,
  FaqTitle,
  FaqDescription,
} from './styles';
import { Banner } from '../../components/Banner';
import { InfoCard } from '../../components/InfoCard';
import { AnimalCard } from '../../components/AnimalCard';

import { ANIMALS } from '../../utils/animals';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { THEME } from '../../theme';

export function Home() {
  return (
    <>
      <Container>
        <Main>
          <Intro>
            <Title>
              Olá, Humano. <br /> Você precisa de um <TitleSpan>amigo?</TitleSpan>
            </Title>
            <Description>
              tente adotar um bichinho e você vai ser muito feliz, eu prometo.
            </Description>
          </Intro>
          <Animal src={catImg} />
        </Main>

        <img src={waveImg} />

        <Content>
          <SubTitle>Conheça a Orion</SubTitle>
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
              icon="./card1.svg"
            />
            <InfoCard
              title="E não há recompensa maior"
              description="do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho."
              icon="./card2.svg"
            />
            <InfoCard
              title="Pensando bem, a pergunta é outra:"
              description="se você pode mudar o destino de um animal de rua, por que não faria isso?"
              icon="./card3.svg"
            />
          </CardContainer>

          <SubTitle>Novos bichinhos</SubTitle>
          <AnimalContainer>
            <AnimalContent>
              {ANIMALS.slice(0, 8).map(animal => (
                <AnimalCard
                  key={animal.id}
                  name={animal.name}
                  city={animal.city}
                  uf={animal.uf}
                  genre={animal.genre}
                  photo={animal.imgUrl}
                />
              ))}
            </AnimalContent>
          </AnimalContainer>
        </Content>

        <Link to="/adoption">
          <ButtonContainer>
            <Button>QUERO ADOTAR</Button>
          </ButtonContainer>
        </Link>

        <FaqContainer>
          <FaqContent>
            <FaqTitle>DÚVIDAS DE COMO ADOTAR?</FaqTitle>
            <FaqDescription>
              Na área de Perguntas Frequentes, você encontra as respostas para as principais dúvidas
              sobre adoção. Caso não encontre o que procura, entre em contato conosco que teremos o
              maior prazer em ajudar você.
            </FaqDescription>

            <ButtonContainer>
              <Link to="/adoption">
                <Button style={{ background: `${THEME.COLORS.TEXT}` }}>
                  IR PARA PERGUNTAS FREQUENTES
                </Button>
              </Link>
            </ButtonContainer>
          </FaqContent>
        </FaqContainer>
      </Container>
      <Footer />
    </>
  );
}

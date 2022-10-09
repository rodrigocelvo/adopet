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
  BannerContainer,
} from './styles';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Main>
        <Intro>
          <Title>
            Olá, Humano <br /> Você precisa de um <TitleSpan>amigo?</TitleSpan>
          </Title>
          <Description>
            tente adotar um bichinho de estimação e você vai ser muito feliz eu prometo.
          </Description>
        </Intro>
        <Animal src={catImg} />
      </Main>
      <img src={waveImg} />
      <Content>
        <SubTitle>Conheça fenomenal</SubTitle>
        <Text>
          Nós fazemos a conexão entre quem deseja adotar um pet com às ongs. Aqui você pode
          encontrar seu amiguinho. Adote seu pet e torne seu mundo mais feliz Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Veniam at, neque sed reprehenderit delectus dolores,
          minima ducimus ipsa asperiores nulla molestiae nam laboriosam possimus eos. Ipsa iusto
          labore eius quam!
        </Text>

        <SubTitle>Por quê adotar?</SubTitle>

        <CardContainer>
          <Card
            title="Nesse exato momento,"
            description="existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu."
            icon="./card1.svg"
          />
          <Card
            title="E não há recompensa maior"
            description="do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho."
            icon="./card2.svg"
          />
          <Card
            title="Pensando bem, a pergunta é outra:"
            description="se você pode mudar o destino de um animal de rua, por que não faria isso?"
            icon="./card3.svg"
          />
        </CardContainer>
      </Content>
    </Container>
  );
}

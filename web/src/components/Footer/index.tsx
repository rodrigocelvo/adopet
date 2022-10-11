import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  App,
  Name,
  Logo,
  InformationContainer,
  Information,
  Ul,
  Li,
  Icon,
  Copyright,
  Social,
} from './styles';

import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';

import footerWave from '../../assets/wave.svg';
import logoImg from '../../assets/logo.svg';

export function Footer() {
  return (
    <>
      <img src={footerWave} />
      <Container>
        <Content>
          <App>
            <Logo src={logoImg} />
            <Name>Adopet</Name>
          </App>

          <InformationContainer>
            <Information>
              <Ul>
                Institucional
                <Link to="/sobre">
                  <Li>Sobre o Adopet</Li>
                </Link>
                <Link to="/faq">
                  <Li>FAQ</Li>
                </Link>
              </Ul>
            </Information>

            <Information>
              <Ul>
                Como Ajudar?
                <Link to="/faq">
                  <Li>Quero adotar</Li>
                </Link>
                <Link to="/faq">
                  <Li>Quero doar</Li>
                </Link>
              </Ul>
            </Information>
          </InformationContainer>

          <Social>
            <Link to="/faq">
              <Icon>
                <RiFacebookFill />
              </Icon>
            </Link>

            <Link to="/faq">
              <Icon>
                <RiInstagramFill />
              </Icon>
            </Link>

            <Link to="faq">
              <Icon>
                <RiYoutubeFill />
              </Icon>
            </Link>
          </Social>
        </Content>
        <Copyright>Orion {new Date().getFullYear()} - Todos os diretos reservados.</Copyright>
      </Container>
    </>
  );
}

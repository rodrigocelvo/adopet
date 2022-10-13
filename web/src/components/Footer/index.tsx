import { Link } from 'react-router-dom';

import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';

import {
  Wave,
  Container,
  Content,
  App,
  Name,
  Logo,
  InformationContainer,
  Information,
  Icon,
  Copyright,
  Social,
} from './styles';

import footerWave from '../../assets/wave.svg';
import logoImg from '../../assets/logo.svg';

export function Footer() {
  return (
    <>
      <Wave src={footerWave} />
      <Container>
        <Content>
          <App>
            <Logo src={logoImg} />
            <Name>Adopet</Name>
          </App>

          <InformationContainer>
            <Information>
              <ul>
                Institucional
                <li>
                  <Link to="/sobre">Sobre o Adopet </Link>
                </li>
                <li>
                  <Link to="/faq">FAQ </Link>
                </li>
              </ul>
            </Information>

            <Information>
              <ul>
                Como Ajudar?
                <li>
                  <Link to="/adoption">Quero adotar </Link>
                </li>
                <li>
                  <Link to="/adoption">Quero doar </Link>
                </li>
              </ul>
            </Information>
          </InformationContainer>

          <Social>
            <Icon title="Facebook">
              <a href="https://facebook.com" target="_blank">
                <RiFacebookFill />
              </a>
            </Icon>

            <Icon title="Instagram">
              <a href="https://instagram.com" target="_blank">
                <RiInstagramFill />
              </a>
            </Icon>

            <Icon title="YouTube">
              <a href="https://youtube.com" target="_blank">
                <RiYoutubeFill />
              </a>
            </Icon>
          </Social>
        </Content>
        <Copyright>
          <p>Adopet {new Date().getFullYear()} - Todos os diretos reservados.</p>
        </Copyright>
      </Container>
    </>
  );
}

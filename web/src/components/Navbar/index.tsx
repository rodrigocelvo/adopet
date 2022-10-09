import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  LeftContainer,
  CenterContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  Button,
  Title,
  OpenLinksButton,
  ButtonContainer,
  NavbarLinkExtended,
} from './styles';
import LogoImg from '../../assets/logo.svg';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container menuIsOpen={menuIsOpen}>
      <NavbarInnerContainer>
        <Link to="/">
          <LeftContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Orion</Title>
          </LeftContainer>
        </Link>

        <CenterContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Início</NavbarLink>
            <NavbarLink to="/sobre"> Sobre</NavbarLink>
            <NavbarLink to="/faq"> FAQ</NavbarLink>
          </NavbarLinkContainer>
        </CenterContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <ButtonContainer>
              <Button variant="primary" onClick={() => console.log('asda')}>
                Quero Adotar
              </Button>
              <Button variant="secondary" onClick={() => console.log('asda')}>
                Entrar
              </Button>
            </ButtonContainer>
            <OpenLinksButton
              onClick={() => {
                setMenuIsOpen(curr => !curr);
              }}
            >
              {menuIsOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {menuIsOpen && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Início</NavbarLinkExtended>
          <NavbarLinkExtended to="/sobre"> Sobre</NavbarLinkExtended>
          <NavbarLinkExtended to="/faq"> FAQ</NavbarLinkExtended>{' '}
          <NavbarLinkExtended to="/contato"> Quero adotar</NavbarLinkExtended>
          <NavbarLinkExtended to="/contato"> Entrar</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Container>
  );
}

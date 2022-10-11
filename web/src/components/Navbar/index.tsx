import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
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
    <Container>
      <Content menuIsOpen={menuIsOpen}>
        <NavbarInnerContainer>
          <Link to="/">
            <LeftContainer>
              <Logo src={LogoImg}></Logo>
              <Title>Adopet</Title>
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
                <Link to="/signin">
                  <Button variant="primary">Quero Adotar</Button>
                </Link>
                <Link to="/signin">
                  <Button variant="secondary">Entrar</Button>
                </Link>
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
            <NavbarLinkExtended to="/faq"> Quero adotar</NavbarLinkExtended>
            <NavbarLinkExtended to="/signin"> Entrar</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </Content>
    </Container>
  );
}

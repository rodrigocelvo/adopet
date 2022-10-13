import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  Avatar,
  AvatarButton,
} from './styles';
import LogoImg from '../../assets/logo.svg';
import { FiAlignRight, FiMenu, FiX } from 'react-icons/fi';

import { Navigate } from 'react-router-dom';

interface NavbarPorps {
  loggedIn?: boolean;
  userAvatar?: string;
}

export function Navbar({ loggedIn, userAvatar }: NavbarPorps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {!loggedIn ? (
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
                    <Link to="/adoption">
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
                <NavbarLinkExtended to="/faq"> FAQ</NavbarLinkExtended>
                <NavbarLinkExtended to="/adoption"> Quero adotar</NavbarLinkExtended>
                <NavbarLinkExtended to="/signin"> Entrar</NavbarLinkExtended>
              </NavbarExtendedContainer>
            )}
          </Content>
        </Container>
      ) : (
        <Container>
          <Content menuIsOpen={menuIsOpen}>
            <NavbarInnerContainer>
              <Link to="/dashboard">
                <LeftContainer>
                  <Logo src={LogoImg}></Logo>
                  <Title>Adopet</Title>
                </LeftContainer>
              </Link>

              <RightContainer>
                <strong>John</strong>
                <AvatarButton onClick={() => navigate('/signin')}>
                  <Avatar src={userAvatar} />
                </AvatarButton>
              </RightContainer>
            </NavbarInnerContainer>
          </Content>
        </Container>
      )}
    </>
  );
}

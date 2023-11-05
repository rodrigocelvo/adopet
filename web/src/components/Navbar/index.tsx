import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

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
import { useAuth } from '../../hooks/auth';

interface NavbarPorps {
  loggedIn?: boolean;
  modalIsOpen?: boolean;
}

export function Navbar({ loggedIn, modalIsOpen }: NavbarPorps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { user, logOut } = useAuth();

  return (
    <>
      {!loggedIn ? (
        <Container>
          <Content menuIsOpen={menuIsOpen} modalIsOpen={modalIsOpen}>
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
                      <Button variant="primary">Adotar</Button>
                    </Link>
                    <Link to="/signin">
                      <Button variant="secondary">Publicar</Button>
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
          <Content menuIsOpen={menuIsOpen} modalIsOpen={modalIsOpen}>
            <NavbarInnerContainer>
              <Link to="/dashboard">
                <LeftContainer>
                  <Logo src={LogoImg}></Logo>
                  <Title>Adopet</Title>
                </LeftContainer>
              </Link>

              <RightContainer>
                <strong>{user.name}</strong>
                <AvatarButton onClick={logOut}>
                  <Avatar
                    src={
                      !user.avatar
                        ? `https://ui-avatars.com/api/?background=5AA9EF&color=CCF8F9&size=500&name=${user.name}`
                        : `http://localhost:3333/public/images/users/${user.avatar}`
                    }
                  />
                </AvatarButton>
              </RightContainer>
            </NavbarInnerContainer>
          </Content>
        </Container>
      )}
    </>
  );
}

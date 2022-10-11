import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { THEME } from '../../theme';

interface NavProps {
  menuIsOpen: boolean;
}

interface ButtonProps {
  variant: string;
}

export const Container = styled.header``;

export const Content = styled.nav<NavProps>`
  margin: 0;
  width: 100%;
  height: ${props => (props.menuIsOpen ? 'auto' : '80px')};
  background-color: #ffffffd0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  z-index: 9999;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

export const Title = styled.h2`
  color: ${THEME.COLORS.PRIMARY_500};
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const NavbarLink = styled(Link)`
  color: ${THEME.COLORS.TEXT};
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding: 0 10px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-color: ${THEME.COLORS.PRIMARY_500};
    color: ${THEME.COLORS.PRIMARY_500};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding: 16px 0;
  width: 100%;
  transition: all 0.2s;

  text-align: center;

  &:hover {
    color: ${THEME.COLORS.HEADING};
    background-color: ${THEME.COLORS.PRIMARY_500};
  }

  &:focus {
    outline: 1px solid ${THEME.COLORS.PRIMARY_500};
    outline-offset: 2px;
  }
`;

export const Logo = styled.img`
  max-width: 100px;
  height: 80px;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  color: ${THEME.COLORS.PRIMARY_500};
  cursor: pointer;

  &:hover {
    color: ${THEME.COLORS.HEADING};
    background-color: ${THEME.COLORS.PRIMARY_500};
  }

  &:focus {
    outline: 1px solid ${THEME.COLORS.PRIMARY_500};
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid ${THEME.COLORS.HEADING};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
  a {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${({ variant }) =>
    variant === 'primary' ? `${THEME.COLORS.PRIMARY_500}` : `${THEME.COLORS.HEADING}`};
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: ${({ variant }) =>
    variant === 'primary' ? `${THEME.COLORS.HEADING}` : `${THEME.COLORS.PRIMARY_500}`};
  width: 100%;
  margin: 0 1px;
  font-weight: 500;

  transition: background-color 0.2s;
  cursor: pointer;

  border: 1px solid
    ${({ variant }) =>
      variant === 'primary' ? `${THEME.COLORS.HEADING}` : `${THEME.COLORS.PRIMARY_500}`};

  &:hover {
    background: ${({ variant }) =>
      variant === 'primary' ? `${THEME.COLORS.HEADING}` : `${THEME.COLORS.PRIMARY_500}`};

    color: ${({ variant }) =>
      variant === 'primary' ? `${THEME.COLORS.PRIMARY_500}` : `${THEME.COLORS.HEADING}`};
    border-color: ${({ variant }) =>
      variant === 'primary' ? `${THEME.COLORS.PRIMARY_500}` : `${THEME.COLORS.HEADING}`};
  }
`;

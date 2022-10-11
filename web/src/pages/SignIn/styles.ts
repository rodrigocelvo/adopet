import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';
import { THEME } from '../../theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Logo = styled.img`
  height: 200px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  color: ${THEME.COLORS.TEXT};
`;

export const AppName = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: ${THEME.COLORS.PRIMARY_500};
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  a {
    color: ${THEME.COLORS.PRIMARY_50};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
  > a {
    color: ${THEME.COLORS.PRIMARY_500};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

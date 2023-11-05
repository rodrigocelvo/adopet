import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/sign-up-background.jpeg';
import { THEME } from '../../theme';

export const Container = styled.div`
  min-height: 150vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 30px 0 100px 0;
`;

export const Logo = styled.img`
  height: 200px;
`;

export const AppName = styled.h1`
  margin: 0;
  padding: 0;
  margin-top: -30px;
  margin-bottom: 50px;
  font-size: 3rem;
  color: ${THEME.COLORS.PRIMARY_500};
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  color: ${THEME.COLORS.TEXT};
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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
  animation: ${appearFromLeft} 1s;

  a {
    color: ${THEME.COLORS.PRIMARY_500};
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

export const Form = styled.form`
  width: 340px;
  text-align: center;

  button {
    margin-top: 10px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

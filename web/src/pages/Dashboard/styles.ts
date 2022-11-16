import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 80px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: ${THEME.COLORS.PRIMARY_500};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;

  button {
    width: 200px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    button {
      margin-top: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NonePet = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.4;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  strong {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    pointer-events: none;
    height: 400px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

export const AnimalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 30px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

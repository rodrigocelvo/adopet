import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
`;

export const Main = styled.div`
  background-color: ${THEME.COLORS.HEADING};

  max-width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    padding-top: 80px;
    flex-direction: column;
  }
`;

export const Intro = styled.div`
  @media (max-width: 1300px) {
    padding: 0 30px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 900;
  color: ${THEME.COLORS.TEXT};

  span {
    color: ${THEME.COLORS.PRIMARY_500};
  }
`;

export const Wave = styled.img`
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Description = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 1rem;
`;

export const Animal = styled.img`
  z-index: 1;
  width: 400px;
  height: 500px;

  @media (max-width: 1300px) {
    width: 300px;
    height: 400px;
  }
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.h2`
  color: ${THEME.COLORS.PRIMARY_500};
  text-align: center;
  margin: 60px 0 20px 0;

  @media (min-width: 768px) {
    &:nth-child(1) {
      margin-top: -50px;
    }
  }
`;

export const Text = styled.p`
  padding: 0 180px;
  color: ${THEME.COLORS.TEXT};
  opacity: 0.8;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const BannerContainer = styled.div`
  padding: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AnimalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 630px;
  }

  @media (max-width: 768px) {
    button {
      width: 300px;
    }
  }

  &:last-child {
    button {
      width: 300px;
      background-color: ${THEME.COLORS.TEXT};
    }
  }
`;

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FaqContent = styled.div`
  width: 90%;
  background-color: ${THEME.COLORS.PRIMARY_100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  border-radius: 30px;
  height: 300px;

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const FaqTitle = styled.h3`
  color: ${THEME.COLORS.PRIMARY_900};
`;

export const FaqDescription = styled.p`
  opacity: 0.8;
  color: ${THEME.COLORS.TEXT};
`;

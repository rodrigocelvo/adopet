import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.div`
  padding-top: 80px;
  background-color: ${THEME.COLORS.BACKGROUND};
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

export const Intro = styled.div``;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 900;
  color: ${THEME.COLORS.TEXT};
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const TitleSpan = styled.span`
  color: ${THEME.COLORS.PRIMARY_500};
`;
export const Description = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 1rem;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const Animal = styled.img`
  z-index: 1;
  width: 400px;
  height: 500px;
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
  margin-top: 80px;

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

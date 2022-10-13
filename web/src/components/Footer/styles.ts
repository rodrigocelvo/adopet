import styled from 'styled-components';

import { THEME } from '../../theme';

export const Wave = styled.img`
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Container = styled.footer`
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${THEME.COLORS.PRIMARY_500};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: -130px;

  @media (max-width: 1366px) {
    margin-top: -70px;
  }

  @media (max-width: 1280px) {
    margin-top: -50px;
  }

  @media (max-width: 768px) {
    margin-top: -30px;
    flex-direction: column;
  }
`;

export const App = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
`;

export const Name = styled.strong`
  font-size: 2rem;
  color: ${THEME.COLORS.HEADING};
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    font-weight: 700;
    color: ${THEME.COLORS.TEXT};
  }

  li {
    list-style: none;
  }

  a {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${THEME.COLORS.HEADING};

    &:hover {
      color: ${THEME.COLORS.TEXT};
    }
  }

  ul:first-child {
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    ul:last-child {
      margin-right: 0px;
      margin-left: 10px;
    }
  }
`;

export const Social = styled.div`
  display: flex;

  @media (max-width: 1366px) {
    margin-top: 30px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: ${THEME.COLORS.HEADING};
  font-size: 36px;

  &:hover {
    color: ${THEME.COLORS.TEXT};
  }

  a {
    font-weight: 400;
    color: ${THEME.COLORS.HEADING};

    &:hover {
      color: ${THEME.COLORS.TEXT};
    }
  }
`;

export const Copyright = styled.div`
  background-color: ${THEME.COLORS.PRIMARY_500};
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.75rem;
    text-align: center;
    opacity: 0.8;
    color: ${THEME.COLORS.TEXT};
  }
`;

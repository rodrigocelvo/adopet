import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.footer`
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${THEME.COLORS.PRIMARY_500};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

export const Ul = styled.ul`
  padding-right: 40px;
  font-weight: 700;
  color: ${THEME.COLORS.TEXT};
`;

export const Li = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${THEME.COLORS.HEADING};

  &:hover {
    color: ${THEME.COLORS.TEXT};
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Social = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: ${THEME.COLORS.HEADING};
  font-size: 36px;

  &:hover {
    color: ${THEME.COLORS.TEXT};
  }
`;

export const Copyright = styled.div`
  font-size: 0.75rem;
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  background-color: ${THEME.COLORS.PRIMARY_500};
  padding-bottom: 10px;
`;

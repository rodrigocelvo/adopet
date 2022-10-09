import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.div`
  background-color: ${THEME.COLORS.PRIMARY_100};
  max-width: 300px;
  height: 150px;
  max-height: auto;
  margin-bottom: 20px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  text-align: start;

  @media (max-width: 1024px) {
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.img`
  margin-left: -50px;
  height: 100px;
`;
export const Title = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${THEME.COLORS.PRIMARY_900};
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: ${THEME.COLORS.TEXT};
`;

import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.div`
  width: 100%;
  padding-top: 120px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 30px;
`;

export const Title = styled.h1`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: 3rem;
`;
export const Description = styled.p`
  margin: 20px 0 0 0;
  color: ${THEME.COLORS.TEXT};
  font-size: 0.875rem;
  text-align: center;
`;

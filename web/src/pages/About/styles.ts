import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.div`
  padding-top: 120px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 30px;
`;

export const Title = styled.h1`
  color: ${THEME.COLORS.PRIMARY_500};
`;
export const Description = styled.p`
  margin: 20px 0 0 0;
  color: ${THEME.COLORS.TEXT};
`;

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

  padding: 0 30px;
`;

export const Title = styled.h1`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: 3rem;
  text-align: center;
`;

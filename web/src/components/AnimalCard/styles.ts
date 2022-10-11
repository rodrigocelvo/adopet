import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.div`
  background-color: ${THEME.COLORS.HEADING};
  width: 300px;
  height: 340px;
  text-align: start;
  border-radius: 4px;
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Name = styled.strong`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: 1.25rem;
`;

export const Photo = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: ${THEME.COLORS.TEXT};
`;
export const Location = styled.p`
  opacity: 0.8;
  font-weight: 400;
  color: ${THEME.COLORS.TEXT};
`;

export const Genre = styled.p`
  font-size: 1.25rem;
  color: ${THEME.COLORS.PRIMARY_500};
`;

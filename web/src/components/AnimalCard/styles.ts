import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.div`
  background-color: ${THEME.COLORS.HEADING};

  height: auto;
  text-align: start;
  border-radius: 4px;
  width: 300px;
`;

export const Content = styled.div`
  padding: 20px 10px;
`;

export const LoggedContent = styled.div`
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Name = styled.strong`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: 1.25rem;
  word-break: break-all;
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

import styled from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.button`
  border: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${THEME.COLORS.BACKGROUND};
  color: ${THEME.COLORS.TEXT};
  margin: 0 4px;
  outline: none;
  border: 2px solid ${THEME.COLORS.BACKGROUND};

  &:hover {
    background-color: ${THEME.COLORS.PRIMARY_50};
  }

  &:focus {
    border: 2px solid ${THEME.COLORS.PRIMARY_500};
  }
`;

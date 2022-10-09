import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.button`
  background: ${THEME.COLORS.PRIMARY_500};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${THEME.COLORS.HEADING};
  width: 100%;
  margin: 0 1px;
  font-weight: 500;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${THEME.COLORS.PRIMARY_100};
    color: ${THEME.COLORS.TEXT};
  }
`;

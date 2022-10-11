import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.button`
  background: ${THEME.COLORS.PRIMARY_500};
  height: 48px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: ${THEME.COLORS.HEADING};
  width: 300px;
  margin: 0 1px;
  font-weight: 900;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

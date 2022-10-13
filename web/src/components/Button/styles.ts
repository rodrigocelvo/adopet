import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.button`
  background: ${THEME.COLORS.PRIMARY_500};
  border-radius: 4px;
  border: 0;
  height: 56px;
  padding: 16px;
  color: ${THEME.COLORS.HEADING};
  width: 100%;

  font-weight: 900;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

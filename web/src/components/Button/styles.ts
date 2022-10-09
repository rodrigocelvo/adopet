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
  max-width: 620px;
  margin: 0 1px;
  font-weight: 500;

  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

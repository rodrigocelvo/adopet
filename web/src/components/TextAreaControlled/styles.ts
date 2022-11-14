import styled, { css } from 'styled-components';
import { THEME } from '../../theme';

export const Container = styled.div`
  width: auto;
  text-align: left;
`;

export const Label = styled.label`
  display: inline;
  font-size: 8px;
  margin-left: 5px;
  color: ${THEME.COLORS.TEXT};
  text-transform: uppercase;
`;

export const Error = styled.p`
  display: inline;
  font-size: 12px;
  margin-left: 5px;
  color: ${THEME.COLORS.ALERT};
  font-weight: 600;
`;

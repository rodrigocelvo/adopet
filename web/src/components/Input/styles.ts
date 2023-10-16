import styled, { css } from 'styled-components';
import { THEME } from '../../theme';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

interface ErrorProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${THEME.COLORS.HEADING};
  border-radius: 4px;
  border: 2px solid ${THEME.COLORS.HEADING};
  padding: 16px;
  max-width: 300px;
  width: 100%;
  color: ${THEME.COLORS.TEXT};
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${THEME.COLORS.ALERT};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${THEME.COLORS.PRIMARY_500};
      border-color: ${THEME.COLORS.PRIMARY_500};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${THEME.COLORS.PRIMARY_500};
    `}

  input {
    outline: none;
    flex: 1;
    background: transparent;
    border: 0;
    color: ${THEME.COLORS.TEXT};
    font-size: 0.85rem;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: ${THEME.COLORS.TEXT};
    opacity: 0.8;

    ${props =>
      props.isFocused &&
      css`
        color: ${THEME.COLORS.PRIMARY_500};
      `}
  }
`;

export const Error = styled.div<ErrorProps>`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: ${THEME.COLORS.ALERT};
    color: ${THEME.COLORS.TEXT};
    &::before {
      border-color: ${THEME.COLORS.ALERT} transparent;
    }
  }
`;

import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';

export const Container = styled(RectButton)`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const RemixIcon = styled(Icon)`
  padding: 0px 20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.PRIMARY_500};
  `};
`;

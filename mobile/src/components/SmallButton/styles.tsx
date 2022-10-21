import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_50};
  justify-content: center;
  align-items: center;
  border-radius: 4pc;
`;

export const RemixIcon = styled(Icon)`
  padding: 0px 20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.PRIMARY_500};
  `};
`;

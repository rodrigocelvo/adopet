import styled, { css } from 'styled-components/native';
import { TextInput as Input, TextInputProps } from 'react-native';
import Icon from 'react-native-remix-icon';

import { RectButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  height: 56px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.HEADING};
    border: 2px solid ${theme.COLORS.CAPTION_100};
  `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.COLORS.PRIMARY_500};;
    '}
  `};
`;

export const TextInput = styled(Input).attrs<InputProps>({
  placeholderTextColor: '#71717A',
})`
  flex: 1;
  padding: 0px 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.TEXT};
  `};
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  height: 100%;
  width: 56px;
  border-radius: 4px;
`;

export const RemixIcon = styled(Icon)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.HEADING};
  `};
`;

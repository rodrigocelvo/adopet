import styled, { css } from 'styled-components/native';
import { TextInput as Input, TextInputProps } from 'react-native';
import Icon from 'react-native-remix-icon';

interface InputProps extends TextInputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  height: 60px;
  margin-bottom: 8px;
  border: 2px solid transparent;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.HEADING};
    /* border: 2px solid ${theme.COLORS.CAPTION_100}; */
  `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
    '}
  `};
`;

export const TextInput = styled(Input).attrs<InputProps>({
  placeholderTextColor: '#71717A',
})`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.TEXT};
  `}
`;

export const RemixIcon = styled(Icon)`
  padding: 0px 20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.CAPTION_400};
  `}
`;

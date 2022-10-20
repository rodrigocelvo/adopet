import styled, { css } from 'styled-components/native';
import { TextInput as Input, TextInputProps } from 'react-native';
import { THEME } from '../../theme';
import Icon from 'react-native-remix-icon';

import { RectButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.COLORS.HEADING};
  border-radius: 8px;
  border: 2px solid ${THEME.COLORS.CAPTION_100};
  height: 60px;
  margin-bottom: 8px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${THEME.COLORS.PRIMARY_500};
    '}
  `};
`;

export const TextInput = styled(Input).attrs<InputProps>({
  placeholderTextColor: `${THEME.COLORS.CAPTION_500}`,
})`
  flex: 1;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  font-size: ${THEME.FONT_SIZE.MD}px;
  padding: 0px 20px;

  color: ${THEME.COLORS.TEXT};
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background-color: ${THEME.COLORS.PRIMARY_500};
  height: 100%;
  width: 60px;
  border-radius: 4px;
`;

export const RemixIcon = styled(Icon)`
  font-size: ${THEME.FONT_SIZE.LG}px;
  color: ${THEME.COLORS.HEADING};
`;

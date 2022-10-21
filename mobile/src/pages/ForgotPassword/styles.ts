import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AppName = styled.Text`
  font-size: 48px;

  margin-bottom: 30px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PRIMARY_500};
  `};
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

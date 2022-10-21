import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.HEADING}; ;
`;

export const Content = styled.View`
  width: 80%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.TEXT};
  `};
`;

export const Description = styled.Text`
  text-align: center;
  margin: 8px 0;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.PRIMARY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Header = styled.Image`
  width: 100%;
  background-image: no-repeat;
`;

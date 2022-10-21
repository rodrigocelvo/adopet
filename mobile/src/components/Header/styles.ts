import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.TEXT};
  `};
`;

export const BTA = styled.View`
  width: 60px;
  height: 60px;
`;

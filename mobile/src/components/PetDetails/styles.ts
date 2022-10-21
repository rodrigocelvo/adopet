import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_50};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.PRIMARY_500};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.CAPTION_500};
  `};
`;

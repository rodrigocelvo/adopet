import styled, { css } from 'styled-components/native';

interface CardProps {
  sm: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const Content = styled.View<CardProps>`
  width: 360px;
  height: 500px;
  background-color: ${({ theme }) => theme.COLORS.CAPTION_800};
  border-radius: 4px;

  ${({ sm }) =>
    sm &&
    css`
      width: 300px;
      height: 400px;
    `};
`;

export const PetImage = styled.Image<CardProps>`
  width: 360px;
  height: 360px;
  overflow: hidden;
  border-radius: 4px;

  ${({ sm }) =>
    sm &&
    css`
      width: 300px;
      height: 300px;
    `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_500};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const Details = styled.View`
  padding: 0 10px;
  flex: 1;
  justify-content: center;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.TEXT};
  `};
`;

import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-right: 12px;
`;

export const Content = styled.View`
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.COLORS.CAPTION_800};
  border-radius: 4px;
`;

export const PetImage = styled.Image`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 4px;
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

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.TEXT};
  `};
`;

export const EmptyBoxSpace = styled.View`
  height: 30px;
  width: 30px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  justify-content: center;

  width: 50px;
  height: 100%;

  align-items: center;
`;

export const ButtonRight = styled.TouchableOpacity`
  justify-content: center;

  width: 50px;
  height: 100%;

  align-items: center;
`;

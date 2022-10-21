import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.SHAPE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

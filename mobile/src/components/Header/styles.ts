import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${THEME.FONT_FAMILY.BOLD};
  font-size: ${THEME.FONT_SIZE.LG}px;
  color: ${THEME.COLORS.TEXT};
`;

export const BTA = styled.View`
  width: 60px;
  height: 60px;
`;

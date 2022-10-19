import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${THEME.COLORS.HEADING};
`;

export const Content = styled.View`
  width: 80%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  font-family: ${THEME.FONT_FAMILY.BOLD};
  font-size: ${THEME.FONT_SIZE.LG}px;
  color: ${THEME.COLORS.TEXT};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${THEME.FONT_SIZE.MD}px;
  color: ${THEME.COLORS.PRIMARY_500};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  text-align: center;
  margin: 8px 0;
`;

export const Header = styled.Image`
  width: 100%;
  background-image: no-repeat;
`;

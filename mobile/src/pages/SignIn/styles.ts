import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  background-color: red;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AppName = styled.Text`
  font-size: 48px;
  font-family: ${THEME.FONT_FAMILY.BOLD};
  color: ${THEME.COLORS.PRIMARY_500};
`;

export const SmallButton = styled.TouchableOpacity``;
export const Title = styled.Text``;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

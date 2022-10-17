import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { THEME } from '../../theme';

export const Container = styled(RectButton)`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.COLORS.PRIMARY_500};
  width: 300px;
`;

export const Title = styled.Text`
  font-size: ${THEME.FONT_SIZE.MD}px;
  color: ${THEME.COLORS.HEADING};
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

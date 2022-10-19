import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';

import { THEME } from '../../theme';

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  background-color: ${THEME.COLORS.HEADING};
  justify-content: center;
  align-items: center;
  border-radius: 4pc;
`;

export const RemixIcon = styled(Icon)`
  padding: 0px 20px;
  font-size: ${THEME.FONT_SIZE.LG}px;
  color: ${THEME.COLORS.PRIMARY_500};
`;

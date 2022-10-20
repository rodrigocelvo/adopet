import styled from 'styled-components/native';
import { THEME } from '../../theme';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: auto;
  max-width: 150px;
  background-color: ${THEME.COLORS.PRIMARY_50};
  height: 40px;
  padding: 0 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const Icon = styled.View`
  width: 30px;
  height: 30px;
  background: yellow;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${THEME.COLORS.PRIMARY_100};
  margin-right: 4px;
`;

export const Title = styled.Text`
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  color: ${THEME.COLORS.PRIMARY_900};
`;

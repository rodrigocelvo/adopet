import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-right: 12px;
`;

export const Content = styled.View`
  width: 180px;
  height: 250px;
  background-color: ${THEME.COLORS.HEADING};
  border-radius: 4px;
`;

export const PetImage = styled.Image`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.PRIMARY_500};
  font-size: ${THEME.FONT_SIZE.LG}px;
`;

export const Details = styled.View`
  padding: 10px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-size: ${THEME.FONT_SIZE.SM}px;
  color: ${THEME.COLORS.TEXT};
`;

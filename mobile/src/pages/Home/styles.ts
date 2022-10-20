import styled from 'styled-components/native';
import { THEME } from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 20px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const ContentPadding = styled.View`
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
`;

export const Username = styled.Text`
  margin-left: 10px;
  font-size: ${THEME.FONT_SIZE.SM}px;
  color: ${THEME.COLORS.TEXT};
  font-family: ${THEME.FONT_FAMILY.MEDIUM};
`;

export const BannerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 20px 0;
  width: 100%;
  height: 120px;
  border-radius: 4px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const SectionTitle = styled.Text`
  font-size: ${THEME.FONT_SIZE.SM}px;
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  color: ${THEME.COLORS.CAPTION_500};
  margin-bottom: 8px;
`;

export const PetCategorySelection = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  min-height: 60px;
`;

export const Adoption = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

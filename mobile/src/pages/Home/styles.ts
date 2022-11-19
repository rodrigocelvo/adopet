import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 120px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
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

export const User = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 100%;
`;

export const Username = styled.Text`
  margin-left: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.TEXT};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `};
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
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.CAPTION_500};
  `};
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

import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const PetImage = styled.ImageBackground`
  width: 100%;
  height: 500px;

  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
`;

export const Linear = styled.View`
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

export const Heading = styled.View`
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 20px;
`;

export const PetLocalization = styled.Text`
  margin-bottom: 20px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.TEXT};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const PetName = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    color: ${theme.COLORS.PRIMARY_500};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const AdoptedBanner = styled.View`
  background-color: rgba(30, 148, 54, 0.6);
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const AdoptedBannerText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px,
    color: ${theme.COLORS.SHAPE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const LikeButton = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;

export const UserContent = styled.View`
  margin-left: 10px;
`;

export const UserAdCreate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.CAPTION_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const UserProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserName = styled.Text`
  margin-right: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.ALERT};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `};
`;

export const SectionTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.CAPTION_500};
  `};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const PetCategorySelection = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const PetDescription = styled.Text`
  margin-bottom: 40px
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.TEXT};
    `};
`;

export const Adoption = styled.View`
  flex-direction: row;

  margin-bottom: 30px;
  align-items: center;
`;

export const Gap = styled.View`
  width: 8px;
`;

export const AdoptedByContainer = styled.View`
  margin-bottom: 40px;
`;

export const AdoptedBy = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const AdoptedByText = styled.Text`
  margin-left: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.SUCCESS};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `};
`;

import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  padding: 0 20px;
`;

export const PetImage = styled.ImageBackground`
  width: 100%;
  height: 400px;

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

export const LikeButton = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.HEADING};
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;

export const UserContent = styled.View``;

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
    color: ${theme.COLORS.SHAPE};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `};
`;

export const UserAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-right: 8px;
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
`;

export const Gap = styled.View`
  width: 8px;
`;

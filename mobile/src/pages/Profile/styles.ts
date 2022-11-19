import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Content = styled.View`
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const AvatarContainer = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  margin-top: 50px;
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;

  border-radius: 100%;
`;

export const UserName = styled.Text`
  margin: 20px 0;
  font-size: 32px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.PRIMARY_500};
  `};
`;
export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroupLine = styled.View`
  width: 58%;
`;

export const InputGroupLine2 = styled.View`
  width: 38%;
`;

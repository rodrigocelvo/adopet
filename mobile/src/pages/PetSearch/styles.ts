import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  margin-top: 20px;
  font-size: 16x;
  color: ${({ theme }) => theme.COLORS.ALERT};
`;

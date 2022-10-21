import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Load = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900}; ;
`;

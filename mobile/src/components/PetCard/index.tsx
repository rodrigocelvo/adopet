import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import { useTheme } from 'styled-components';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Content,
  PetImage,
  Title,
  Details,
  Information,
  InfoText,
} from './styles';

export interface PetCardProps {
  name: string;
  imgUrl: string;
  city: string;
  uf: string;
  genre: string;
}

interface Props extends TouchableOpacityProps {
  data: PetCardProps;
}

export function PetCard({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Content>
        <PetImage source={{ uri: `${data.imgUrl}` }} />
        <Details>
          <Title>{data.name}</Title>
          <Information>
            <InfoText>
              {data.city}, {data.uf}
            </InfoText>
            <InfoText>
              <RemixIcon
                name={data.genre === 'male' ? 'men-line' : 'women-line'}
                color={theme.COLORS.PRIMARY_500}
                size={18}
              />
            </InfoText>
          </Information>
        </Details>
      </Content>
    </Container>
  );
}

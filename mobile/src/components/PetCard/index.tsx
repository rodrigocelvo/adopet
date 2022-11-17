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
  id: string;
  name: string;
  imgUrl: string;
  sex: string;

  author: {
    uf: string;
    city: string;
  };
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
              {data.author.city}, {data.author.uf}
            </InfoText>
            <InfoText>
              <RemixIcon
                name={data.sex === 'male' ? 'men-line' : 'women-line'}
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

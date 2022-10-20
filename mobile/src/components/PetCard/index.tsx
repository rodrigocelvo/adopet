import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import { THEME } from '../../theme';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

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
                color={THEME.COLORS.PRIMARY_500}
                size={18}
              />
            </InfoText>
          </Information>
        </Details>
      </Content>
    </Container>
  );
}

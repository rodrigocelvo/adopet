import { Container, Content, Photo, Name, Info, Location, Genre } from './styles';

import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

interface AnimalCardProps {
  photo: string;
  name: string;
  city: string;
  uf: string;
  genre: string;
}

export function AnimalCard({ photo, name, city, uf, genre }: AnimalCardProps) {
  return (
    <Container>
      <Photo src={photo} />
      <Content>
        <Name>{name}</Name>
        <Info>
          <Location>
            {city}, {uf}
          </Location>
          <Genre>{genre === 'male' ? <BsGenderMale /> : <BsGenderFemale />}</Genre>
        </Info>
      </Content>
    </Container>
  );
}

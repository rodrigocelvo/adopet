import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { SmallButton } from '../SmallButton';

import {
  Container,
  Content,
  LoggedContent,
  ButtonContainer,
  Photo,
  Name,
  Info,
  Location,
  Genre,
} from './styles';

import { THEME } from '../../theme';

interface AnimalCardProps {
  photo: string;
  name: string;
  city?: string;
  uf?: string;
  genre?: string;
  loggedIn?: boolean;
}

export function AnimalCard({ photo, name, city, uf, genre, loggedIn }: AnimalCardProps) {
  return (
    <>
      {!loggedIn ? (
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
      ) : (
        <Container>
          <Photo src={photo} />
          <LoggedContent>
            <Name>{name}</Name>
            <ButtonContainer>
              <SmallButton name="Deletar" icon={FiTrash2} color={THEME.COLORS.ALERT} />
              <SmallButton name="Editar" icon={FiEdit2} color="#EFB35A" />
            </ButtonContainer>
          </LoggedContent>
        </Container>
      )}
    </>
  );
}

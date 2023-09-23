import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { SmallButton } from '../SmallButton';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

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
import { useNavigate } from 'react-router-dom';

export interface AnimalCardProps {
  id: string;
  imgUrl: string;
  name: string;
  genre?: string;

  author?: {
    city?: string;
    uf?: string;
  };

  loggedIn?: boolean;
}

interface Props extends AnimalCardProps {}

export function AnimalCard({ imgUrl, name, genre, loggedIn, author, id }: Props) {
  const navigate = useNavigate();

  return (
    <>
      {!loggedIn ? (
        <Container>
          <Photo src={`http://localhost:3333/public/images/pets/${imgUrl}`} />
          <Content>
            <Name>{name}</Name>
            <Info>
              <Location>
                {author?.city}, {author?.uf}
              </Location>
              <Genre>{genre === 'male' ? <BsGenderMale /> : <BsGenderFemale />}</Genre>
            </Info>
          </Content>
        </Container>
      ) : (
        <Container>
          <Photo src={`http://localhost:3333/public/images/pets/${imgUrl}`} />
          <LoggedContent>
            <Name>{name}</Name>

            <ButtonContainer>
              <AlertDialog.Trigger asChild>
                <SmallButton name="Deletar" icon={FiTrash2} color={THEME.COLORS.ALERT} />
              </AlertDialog.Trigger>

              <SmallButton
                onClick={() => navigate(`/pet/${id}/edit`)}
                name="Editar"
                icon={FiEdit2}
                color="#EFB35A"
              />
            </ButtonContainer>
          </LoggedContent>
        </Container>
      )}
    </>
  );
}

import React, { FormEvent, useEffect } from 'react';

import { Container, Image } from './styles';

import notFoundImg from '../../assets/404.svg';
import { Button } from '../../components/Button';

import { useNavigate } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={notFoundImg} />
      <div>
        <p>Pagina não encotrada</p>
        <Button onClick={() => navigate('/')}>
          <FiChevronLeft size={24} />
          Voltar para Home
        </Button>
      </div>
    </Container>
  );
}

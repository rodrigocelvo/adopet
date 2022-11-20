import styled from 'styled-components';

import { THEME } from '../../theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 300px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  p {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

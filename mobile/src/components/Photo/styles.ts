import styled from 'styled-components/native';

interface ImageProops {
  size: string;
}

export const Container = styled.Image<ImageProops>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};

  border-radius: 100%;
`;

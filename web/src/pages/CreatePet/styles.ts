import styled, { keyframes } from 'styled-components';
import { THEME } from '../../theme';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const Container = styled.div`
  /* min-height: 100vh; */
  display: flex;
  padding-bottom: 80px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 370px;
  margin-bottom: 20px;

  button {
    width: auto;
    background-color: ${THEME.COLORS.SUCCESS};
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    button {
      margin-top: 20px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: ${THEME.COLORS.PRIMARY_500};
`;

export const Form = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  gap: 50px;

  input {
    width: 300px;
  }

  button {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;

  margin: 8px 0;
`;

export const AvatarInput = styled.div`
  img {
    width: 320px;
    height: 320px;

    border-radius: 4px;
    object-fit: cover;

    &:hover {
      opacity: 0.8;
    }
  }

  label {
    transition: background-color 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 320px;
      height: 320px;
      border: 1px dashed ${THEME.COLORS.PRIMARY_500};

      svg {
        width: 48px;
        height: 48px;
        color: ${THEME.COLORS.PRIMARY_500};
      }

      p {
        color: ${THEME.COLORS.TEXT};
        opacity: 0.6;
      }
    }

    &:hover {
    }
  }
`;

export const AnimalImageContainer = styled.div``;
export const AnimalFormContainer = styled.div``;

export const OptionContainer = styled.div`
  margin-top: 8px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  margin: 8px 0;
  border: 2px solid ${THEME.COLORS.HEADING};

  padding: 16px;

  p {
    font-size: 0.85rem;
    text-align: start;
    color: ${THEME.COLORS.TEXT};
    display: flex;

    opacity: 0.8;

    svg {
      font-size: 20px;
      margin-right: 16px;
    }
  }

  &:focus-within {
    border: 2px solid ${THEME.COLORS.PRIMARY_500};
  }
`;

export const Option = styled.div`
  display: flex;

  align-items: flex-end;
  gap: 12px;
  margin-top: 8px;

  label {
    color: ${THEME.COLORS.TEXT};
    opacity: 0.8;
  }

  &:focus-within {
    label {
      font-weight: 500;
    }
  }
`;

export const StyledRoot = styled(RadioGroupPrimitive.Root)`
  display: flex;
  flex-direction: column;
`;

export const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
  background-color: ${THEME.COLORS.HEADING};
  opacity: 0.8;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    /* background-color: ${THEME.COLORS.PRIMARY_100}; */
  }

  &:focus {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${THEME.COLORS.PRIMARY_500};
  }
`;

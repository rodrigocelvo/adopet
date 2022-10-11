import styled from 'styled-components';
import { THEME } from '../../theme';

export const QuestionContainer = styled.div`
  width: 100%;
  background-color: ${THEME.COLORS.PRIMARY_50};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 8px 8px 0 0;
`;

export const Button = styled.button`
  border: none;
  background-color: ${THEME.COLORS.PRIMARY_50};
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: ${THEME.COLORS.PRIMARY_900};
  border-radius: 4px;

  &:hover {
    color: ${THEME.COLORS.HEADING};
    background-color: ${THEME.COLORS.PRIMARY_500};
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 46px;
  height: auto;
  padding: 10px 20px;
`;

export const QuestionTitle = styled.strong``;

export const Icon = styled.div`
  font-size: 24px;
`;

export const QuestionContent = styled.div`
  height: auto;
  background-color: ${THEME.COLORS.HEADING};
  padding: 20px;
  display: flex;
  border-radius: 0 0 4px 4px;
`;

export const QuestionDescription = styled.p`
  font-size: 0.825rem;
  color: ${THEME.COLORS.TEXT};
`;

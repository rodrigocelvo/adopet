import React, { useState } from 'react';

import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import {
  QuestionContainer,
  Question,
  QuestionContent,
  Icon,
  QuestionTitle,
  QuestionDescription,
  Button,
} from './styles';

interface AccordionProps {
  title: string;
  description: string;
}

export function Accordion({ title, description }: AccordionProps) {
  const [questionIsOpen, setQuestionIsOpen] = useState(false);

  return (
    <QuestionContainer>
      <Button onClick={() => setQuestionIsOpen(!questionIsOpen)}>
        <Question>
          <QuestionTitle>{title}</QuestionTitle>
          <Icon>{questionIsOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</Icon>
        </Question>
      </Button>
      {questionIsOpen && (
        <QuestionContent>
          <QuestionDescription>{description}</QuestionDescription>
        </QuestionContent>
      )}
    </QuestionContainer>
  );
}

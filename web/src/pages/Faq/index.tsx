import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordtion';

import { QUESTIONS } from '../../utils/questions';

import { Container, Content, Title } from './styles';

export function Faq() {
  return (
    <>
      <Container>
        <Content>
          <Title>Perguntas Frequentes</Title>

          {QUESTIONS.map(question => (
            <Accordion
              key={question.id}
              title={question.title}
              description={question.descripition}
            />
          ))}
        </Content>
      </Container>
      <Footer />
    </>
  );
}

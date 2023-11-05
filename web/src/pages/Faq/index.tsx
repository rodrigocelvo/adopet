import { Navbar } from '../../components/Navbar';
import { Accordion } from '../../components/Accordion';
import { Footer } from '../../components/Footer';

import { QUESTIONS } from '../../utils/questions';

import { Container, Content, Title } from './styles';

export function Faq() {
  return (
    <>
      <Navbar />
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

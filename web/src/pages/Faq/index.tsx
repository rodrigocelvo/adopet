import { Footer } from '../../components/Footer';
import { Accordion } from '../../components/Accordtion';

import { QUESTIONS } from '../../utils/questions';

import { Container, Content, Title } from './styles';
import { Navbar } from '../../components/Navbar';

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

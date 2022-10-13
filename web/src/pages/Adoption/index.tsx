import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { Container, Content, Title, Description } from './styles';

export function Adoption() {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <Title>Adotar um pet</Title>
          <Description>
            Adote seu pet bla blab Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ipsum porro nobis impedit at blanditiis rerum doloremque consectetur. Eius placeat
            officia enim id. Qui dolor ea saepe doloribus, asperiores quam! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rem, incidunt. Praesentium pariatur velit harum fugit
            minima reiciendis facilis deleniti, labore qui, esse quae molestias nulla mollitia
            commodi veritatis ipsam iste.
          </Description>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

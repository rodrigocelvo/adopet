import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { Container, Content, Title, Description } from './styles';

export function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <Title>Sobre nós</Title>
          <Description>
            Programa de Adoção de Animais é a conexão que faltava entre você e o seu melhor amigo:
            através do cadastro e atuação de ONGs/protetores independentes e diversas instituições
            parceiras, milhares de cães e gatos têm a chance de encontrar um lar todos os dias. Para
            nós, adotar é um momento de felicidade, que deve ser construído com parceria, cuidado e
            responsabilidade. Somos uma rede de apaixonados por pets e queremos incentivar a adoção,
            conscientizar sobre a posse responsável e ajudar a diminuir o índice de animais
            abandonados através de projetos e ações para melhoria de bem estar de pets e
            instituições parceiras em todo o Brasil. Funciona assim: o programa cadastra
            ONGs/protetores independentes para que cães e gatos tenham uma chance de encontrar um
            lar. As lojas disponibilizam espaços permanentes dedicados à adoção no centro de suas
            lojas, sendo todo o processo conduzido pelos parceiros, conforme orientações sobre posse
            responsável. Todos os pets e o processo de adoção são de responsabilidade exclusiva das
            ONGs/protetores. A vantagem dessa união entre as lojas e as ONGs/protetores é que os
            adotantes passam por todo o processo de adoção em um só lugar, e ainda conta com todo
            suporte necessário neste momento tão importante.
          </Description>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

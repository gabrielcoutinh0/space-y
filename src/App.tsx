import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, Title, FeaturedText, SubTitle, ImageMain, CardsMain } from './styles/styles';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <>
        <GlobalStyles />

        <Container>
            <Header>
                <Logo>
                    <a href="/">
                        <img src='./images/logo-space-y.svg' alt="Space Y" />
                    </a>
                </Logo>
            </Header>

            <Main>
                <FeaturedText>Finalmente é possível!</FeaturedText>
                <Title>Sua jornada para Marte começa aqui<span>.</span></Title>

                <SubTitle>A primeira viagem para Marte estará disponivel apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</SubTitle>
                
                <Button text='Inscreva-se agora!' />    
                <ImageMain />
            </Main>

            <CardsMain>
                <Card src='./images/icon-rocket.svg' text='Foguetes com a mais alta tecnologia e conforto.' alt='Rocket'/>

                <Card src='./images/icon-flag.svg' text='Mais de 100 missões consecutivas com sucesso.' alt='Flag'/>

                <Card src='./images/icon-telescope.svg' text='Experiencia única e exclusiva.' alt='Telescope' small/>
            </CardsMain>

        </Container>
    </>
  );
}

export default App;

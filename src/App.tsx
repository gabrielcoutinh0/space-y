import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, Title, FeaturedText, SubTitle, ImageMain } from './styles/styles';
import Button from './components/Button';

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
                
                <ImageMain />
                <Button text='Inscreva-se agora!' />    
            </Main>


        </Container>
    </>
  );
}

export default App;

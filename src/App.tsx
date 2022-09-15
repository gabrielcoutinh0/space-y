import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, TitleH1, FeaturedText, SubTitle, ImageMain, CardsMain, ContainerAbout, About, TitleH2, Paragraph, ImageAbout, DivTexts, DivGallery, DivTextGallery, ContainerForm, DivForm, BoxForm, TicketIcon, TitleH3, ParagraphForm, ImageForm, CheckBox, LabelCheckBox, ContainerFooter, DivFooter, ImageFooter, Footer, SocialNetworks, LinkFooter, ULFooter, LIFooter } from './styles/styles';
import Button from './components/Button';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Form from './components/Form';

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
                <TitleH1>Sua jornada para Marte começa aqui<span>.</span></TitleH1>

                <SubTitle>A primeira viagem para Marte estará disponivel apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</SubTitle>
                
                <Button text='Inscreva-se agora!' primary/>    
                <ImageMain />  
            </Main>


            <CardsMain>
                <Card src='./images/icon-rocket.svg' text='Foguetes com a mais alta tecnologia e conforto.' alt='Rocket'/>

                <Card src='./images/icon-flag.svg' text='Mais de 100 missões consecutivas com sucesso.' alt='Flag'/>

                <Card src='./images/icon-telescope.svg' text='Experiencia única e exclusiva.' alt='Telescope' small/>
            </CardsMain>
        </Container>

        <ContainerAbout>
            <About>
                <ImageAbout />
                <DivTexts>
                    <FeaturedText>Por que Marte?</FeaturedText>

                    <TitleH2>Sobre o planeta vermelho</TitleH2>

                    <Paragraph>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</Paragraph>

                    <Paragraph>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</Paragraph>
                </DivTexts>
            </About>

            <DivGallery>
                <DivTextGallery>
                    <Logo>
                        <img src='./images/logo-space-y.svg' alt="Space Y" />
                    </Logo>
                    <TitleH2 >O Caminho para tornar a humanidade multiplanetária<span>.</span></TitleH2>
                    <Button text='Inscreva-se agora' />    
                </DivTextGallery>
                <Gallery />
            </DivGallery>
        </ContainerAbout>

        <ContainerForm>
            <DivForm>
                <BoxForm>
                    <TicketIcon><img src='./images/icon-ticket.svg' alt='Ticket' /></TicketIcon>
                    <TitleH3>Garanta sua vaga para a primeira viagem</TitleH3>
                    <ParagraphForm>Preencha os campos abaixo para entrar na lista de espera</ParagraphForm>
                    <Form type='text' text='Seu nome' name='name'/>
                    <Form type='email' text='E-mail' name='email'/>
                    <Form type='number' text='Telefone' name='phone'/>
                    <LabelCheckBox>
                        <CheckBox />
                        Concordo em receber comunicações
                    </LabelCheckBox>
                    <Button text='Garantir minha vaga' primary fullWidth />
                </BoxForm>
                <ImageForm />
            </DivForm>
        </ContainerForm>

        <ContainerFooter>
            <DivFooter>
                <ImageFooter />
                <Footer>
                    <Logo>
                        <a href='/'><img src='./images/logo-space-y.svg' alt="Space Y" /></a>
                    </Logo>
                    <SocialNetworks>
                        <a href='/'><img src='./images/instagram.svg' alt='Instagram' /></a>
                        <a href='/'><img src='./images/linkedin.svg' alt='Linkedin' /></a>
                        <a href='/'><img src='./images/facebook.svg' alt='Facebook' /></a>
                    </SocialNetworks>
                    <LinkFooter>
                        <ULFooter>
                            <a href='/'><LIFooter>Início</LIFooter></a>
                            <a href='/'><LIFooter>Sobre nós</LIFooter></a>
                            <a href='/'><LIFooter>Missões</LIFooter></a>
                            <a href='/'><LIFooter>Contato</LIFooter></a>
                        </ULFooter>
                    </LinkFooter>
                </Footer>
            </DivFooter>

        </ContainerFooter>
    </>
  );
}

export default App;

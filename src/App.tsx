import { GlobalStyles } from './styles/globalstyles'
import { Header, Title } from './styles/styles';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <Title />
      <Button text='Teste'/>
    </div>
  );
}

export default App;

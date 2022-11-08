import './App.css';
import Calculadora from './components/Calculadora';
import Logo from './components/Logo'
import Stack from '@mui/material/Stack';

function App() {

  return (
    <div className="App">
      <Logo />
      <Stack className='hero' alignItems={"center"} spacing={1}>
        <Calculadora />
      </Stack>
    </div>
  );
}

export default App;

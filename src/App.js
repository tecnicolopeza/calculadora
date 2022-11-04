import './App.css';
import Calculadora from './components/Calculadora';
import Logo from './components/Logo'
import Stack from '@mui/material/Stack';
import BotonNumeral from './components/BotonNumeral';

function App() {
  return (
    <div className="App">
      <Logo />
      <Stack className='hero' alignItems={"center"} spacing={1}>
        <Calculadora />
        <BotonNumeral numero={1}/>
      </Stack>
    </div>
  );
}

export default App;

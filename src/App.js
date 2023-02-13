import React,{ useState } from 'react';


//MUI for DarkMode---------------------------------------------------------------------------
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { teal, grey } from '@mui/material/colors';

//Context-------------------------------------------------------------------------------------
import ColorModeContext from './context/ColorModeContext';

//ルーティング---------------------------------------------------------------------------------
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Almenia from './Pages/Almenia';
import China from './Pages/China'
import Georgia from './Pages/Georgia'
import India from './Pages/India'
import Thailand from './Pages/Thailand'
import Vietnam from './Pages/Vietnam'
import { Output } from './Pages/Output'
import ContactForm from "./ContactForm"
import { NoMatch } from './Pages/NoMatch';
import SkillsBar from './components/SkillsBar/SkillsBar'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const[mode, setMode] =useState('dark');
  const theme = createTheme({
    palette:{
      mode,
      ...(mode === 'light'
      ?{
        primary: teal,
        divider: teal[300],
        background:{
          default: teal[100],
          paper: teal[300],
        },
        text:{
          primary:grey[50],
          secondary:grey[50]
        }
      }
      :{
        primary: grey,
        divider: grey[700],
        background:{
          default: grey[900],
          paper: grey[900],
        },
        text:{
          primary:'#fff',
          secondary: grey[500]
        }
      })
    },
  });
  const colorMode = {
    toggleColorMode:() => {
      setMode((prevMode)=>(prevMode==='light'?'dark':'light'));
    },
  };
  return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Almenia' element={<Almenia />} />
              <Route path='China' element={<China />} />
              <Route path='Georgia' element={<Georgia />} />
              <Route path='India' element={<India />} />
              <Route path='Thailand' element={<Thailand />} />
              <Route path='Vietnam' element={<Vietnam />} />
              <Route path='Output' element={<Output />} />
              <Route path='ContactForm' element={<ContactForm />} />
              <Route path='SkillsBar' element={<SkillsBar/>} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
  );
}

export default App;

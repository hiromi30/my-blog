// import React,{ useState } from 'react';
import MuiNavbar from "../components/MuiNavbar";
import MuiLayout from "../components/MuiLayout";
import MuiCards from "../components/MuiCards";
import Footer from "../components/Footer";
import Features from "../components/Features";


//MUI for DarkMode---------------------------------------------------------------------------
// import { ThemeProvider, createTheme} from '@mui/material/styles';
// import { teal, grey } from '@mui/material/colors';

//Context-------------------------------------
// import ColorModeContext from './context/ColorModeContext';
//-----------------------------------------------------------------------------


const Home = () => {
  return (
    <>
      <MuiNavbar />
      <MuiLayout />
      <MuiCards />
      <Features />
      <Footer />
    </>
  );
};

export default Home
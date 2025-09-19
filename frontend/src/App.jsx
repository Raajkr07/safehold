import { useState } from 'react'
import './styles/App.css'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  focusRing: "never",
  fontFamily: "poppins, sans-serif",
  headings: { fontFamily: "merriweather, serif" },
  colors: {


    primary: [
      '#f1fcfa', // 50
      '#cff8ef', // 100
      '#9ff0e1', // 200
      '#67e1cf', // 300
      '#32b9a9', // 400 main
      '#1fad9f', // 500
      '#168b82', // 600
      '#166f69', // 700
      '#165955', // 800
      '#174a47', // 900
      '#072c2b'  // 950
    ],

    // Gun Smoke
    neutral: [
      '#f6f6f6', // 50
      '#e7e7e7', // 100
      '#d1d1d1', // 200
      '#b0b0b0', // 300
      '#888888', // 400 main
      '#6d6d6d', // 500
      '#5d5d5d', // 600
      '#4f4f4f', // 700
      '#454545', // 800
      '#3d3d3d', // 900
      '#262626', // 950 (extra darker shade)
    ],

    dark: [
      '#909296', 
      '#5c5f66', 
      '#373A40',
      '#2C2E33', 
      '#25262b', 
      '#1A1B1E', 
      '#141517', 
      '#101113',
    ],
  },
  
  primaryColor: "primary",
  primaryShade: 4,
  defaultGradient: {
    from: "primary.4",
    to: "primary.8",
    deg: 132
  },
  darkColorScheme: {
    colorScheme: 'dark',
    colors: {
      background: '',
      text: '#ffffff',
    },
  }
});

function App() {

  return (

    <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalStyles>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App

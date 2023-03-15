import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
        fontFamily: "Alegreya Sans SC, sans-serif"
      },
  });

// Create a theme instance.
export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Alegreya Sans SC, sans-serif"
  },
});




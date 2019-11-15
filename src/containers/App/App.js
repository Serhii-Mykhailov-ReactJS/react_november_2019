// Core
import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Containers
import Routing from '../Routing/Routing';
import theme from './theme';
// Styles
import 'typeface-roboto';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routing />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

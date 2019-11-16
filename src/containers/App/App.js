// Core
import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
// Containers
import Routing from '../Routing/Routing';
import theme from './theme';
import { store } from '../../init/store';
// Styles
import 'typeface-roboto';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routing />
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

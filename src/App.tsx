import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

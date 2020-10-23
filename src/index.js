import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './theme/GlobalStyles';
import {ThemeProvider} from 'styled-components'
  
import Theme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);

import React from 'react';
import { GlobalStyles } from '../../styles/globalStyles.style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../commons/theme';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

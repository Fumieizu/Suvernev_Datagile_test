import React from 'react';
import { GlobalStyles } from '../../styles/globalStyles.style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../commons/theme';
import { MainContainer } from '../MainContainer';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  );
};

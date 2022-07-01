import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      pink: string;
      blue: string;
      darkMagenta: string;
      darkBlue: string;
    };

    transitions: {
      transitionDuration: string;
    };

    breakpoints: {
      xl: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}

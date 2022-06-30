import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      pink: string;
      blue: string;
    };

    transitions: {
      transitionDuration: string;
    };
  }
}

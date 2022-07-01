import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Permanent Marker', Arial, cursive;
    color: ${(props) => props.theme.colors.pink};
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

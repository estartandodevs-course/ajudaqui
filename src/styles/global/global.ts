import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Open Sans', 'Roboto', sans-serif;
  }

  h1, h2, p {
    margin: 0;
    line-height: 1;
  }

  #root, html, body {
    min-height: 100%;
    width: 100%;
  }

`;

export { GlobalStyle };

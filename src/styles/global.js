import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Italic.ttf");
  }

  @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular.ttf");
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Bold.ttf");
  
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Medium.ttf");
  
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Regular.ttf");
  
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

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

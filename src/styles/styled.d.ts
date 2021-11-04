import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    shadow: array,
    palette: {
      colors: {
        primary: string,
        primaryVariant: string,
        secondary: string,
        secondaryVariant: string,
        purple: string,
        text: string,
        dark: {
          gray: string,
        },
        light: {
          gray: string,
          grayish: string,
        },
        light: {
          gray: string,
          grayish: string,
        },
        white: string,
        emergency: string,
        gradientBackground: string,
        border: string,
        gradientButton: string,
        dotColor: string,
      },
    },
    typography: {
      h1: {
        fontFamily: string,
        fontWeight: number,
        fontSize: string,
      },
      h2: {
        fontFamily: string,
        fontWeight: number,
        fontSize: string,
      },
      body1: {
        fontFamily: string,
        fontWeight: number,
        fontSizeText: string,
        fontSizeSubtitles: string,
      },
    },
    margins: {
      marginLateral: string,
      marginUpAndDown: string,
    },
  }
}

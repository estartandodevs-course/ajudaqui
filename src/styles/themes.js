const theme = {
  shadow: ["0px 4px 4px rgba(0, 0, 0, 0.25)"],
  palette: {
    colors: {
      primary: "#5e38a8",
      primaryVariant: "#4e3681",
      secondary: "#8360CA",
      secondaryVariant: "#D8CDEE",
      purple: "#782CE8",
      text: "#0C011B",
      dark: {
        gray: "#2C2834",
      },
      light: {
        gray: "#47454F",
        grayish: "#F9F7FB",
      },
      white: "#fff",
      emergency: "#bc1610",
      gradientBackground:
        "linear-gradient(114.44deg, rgb(94, 56, 168),rgb(72, 28, 167))",
      border: "#47454f",
      gradientButton: "linear-gradient(126.22deg, rgb(131, 96, 202) , rgb(161, 115, 255))",
      dotColor: "#DFDFDF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: "1.75rem",
    },
    h2: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: "1.375rem",
    },
    body1: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSizeText: "1rem",
      fontSizeSubtitles: "0.875rem",
    },
  },

  margins: {
    marginLateral: "24px",
    marginUpAndDown: "32px",
  },
};

export { theme };

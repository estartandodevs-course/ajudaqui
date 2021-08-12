import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/Auth";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

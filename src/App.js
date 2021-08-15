import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/Auth";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes";
import Routes from "./routes";
import { ModalProvider } from "./contexts/Modal";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ModalProvider>
            <GlobalStyle />
            <Routes />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

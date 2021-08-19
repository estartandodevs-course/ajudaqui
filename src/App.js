import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/Auth";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes";
import Routes from "./routes";
import { ModalProvider } from "./contexts/Modal";
import { StoreProvider } from "./contexts/Store";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <StoreProvider>
            <ModalProvider>
              <GlobalStyle />
              <Routes />
            </ModalProvider>
          </StoreProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

import React from "react";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

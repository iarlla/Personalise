import { useState } from "react";
import GlobalStyle from "./styles/global";
import RouteApp from "./routes";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <RouteApp />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;

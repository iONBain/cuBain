import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext,DataProvider } from "./contexts/DataContext";
import { AuthProvider,AuthContext } from "./contexts/AuthContext";
import App from "./App";
import { makeServer } from "./server";

export {DataContext,AuthContext}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
              <App />
        </DataProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);

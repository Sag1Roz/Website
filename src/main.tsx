import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ModalContextsProvider } from "./contexts/ModalContexts.tsx";
import { CartContextsProvider } from "./contexts/CartContexts.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalContextsProvider>
    <CartContextsProvider>
      <UserContextProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </UserContextProvider>
    </CartContextsProvider>
  </ModalContextsProvider>
);

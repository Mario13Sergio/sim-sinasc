import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../src/components/App/index.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ResetStyled } from "./styles/reset.js";
import { routes } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}>
        <App />
        <ResetStyled />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);

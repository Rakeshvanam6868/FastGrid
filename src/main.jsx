import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GridContext } from "../src/components/GridContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GridContext>
      <App />
    </GridContext>
  </React.StrictMode>
);

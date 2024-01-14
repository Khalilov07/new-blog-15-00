import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // компонент
import { BrowserRouter } from "react-router-dom";

// создается главный элемент
const root = ReactDOM.createRoot(document.getElementById("root"));
// рендерится APP
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// npx create-react-app .

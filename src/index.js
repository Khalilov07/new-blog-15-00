import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // компонент
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from "./store";

// создается главный элемент
const root = ReactDOM.createRoot(document.getElementById("root"));
// рендерится APP
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// npx create-react-app .

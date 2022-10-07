import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/gallery">
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

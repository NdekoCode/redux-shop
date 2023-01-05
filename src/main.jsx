import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { shopStore } from "./libs/store/shop/stores";
import AppContainer from "./pages/components/containers/AppContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={shopStore}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { addToCart } from "./libs/store/shop/actions";
import { shopStore } from "./libs/store/shop/stores";
console.log(shopStore.getState());
shopStore.dispatch(
  addToCart({
    ref: "fruits_1",
    category: 0,
    name: "Citrons",
    price: 0.99,
    unit: "pièce",
    image: "citron.png",
  })
);

console.log(shopStore.getState());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={shopStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

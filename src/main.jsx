import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./libs/store";
import { AppContainer } from "./views/containers";
// import { addtoCart } from "./app/libs/actions";

// Log the initial state
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
//store.dispatch(addtoCart({name: "citron"}, 2))
//store.dispatch(addtoCart({name: "kiwi"}, 5))
unsubscribe();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);

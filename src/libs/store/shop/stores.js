import { legacy_createStore as createStore } from "redux";
import { cartReducer } from "./reducers";

export const shopStore = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);

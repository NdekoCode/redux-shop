import { legacy_createStore as createStore } from "redux";
import onlineStoreApp from "./reducers";
export const store = createStore(onlineStoreApp);

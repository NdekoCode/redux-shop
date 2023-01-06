import list from "../../data/data";
import { getFromLocal, saveToLocalStorage } from "../../utils";
import ACTIONS from "./actions";

const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART, SAVE_CART, RESET_CART } =
  ACTIONS;
const items = getFromLocal();
const initialState = {
  cartItems: items ? items : [],
  items: list,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let cartExist = false;
      const findIfExists = (cart) => {
        if (
          cart.name === action.payload.name &&
          cart.price === action.payload.price
        ) {
          cartExist = true;
          cart.quantity = cart.quantity + action.payload.quantity;
          return cart;
        }
        return cart;
      };
      const newState = {
        ...state,
        cartItems: state.cartItems.map(findIfExists),
      };
      return cartExist
        ? newState
        : {
            ...state,
            cartItems: [{ ...action.payload }, ...state.cartItems],
          };

    case UPDATE_CART:
      const findAndCart = (cart) => {
        if (cart.id === action.payload.id) {
          cart.quantity = action.payload.quantity;
          return cart;
        }
        return cart;
      };
      return { ...state, cartItems: state.cartItems.map(findAndCart) };
    case REMOVE_FROM_CART:
      const findAndDelete = (cart) => cart.id !== action.payload.id;
      return { ...state, cartItems: state.cartItems.filter(findAndDelete) };
    case SAVE_CART:
      saveToLocalStorage(action.payload);
      return state;
    case RESET_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

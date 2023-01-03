import { v4 as uuid } from "uuid";
/**
 * definitions des actions
 */
const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};
const { ADD_TO_CART } = ACTIONS;
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: uuid(),
      qty: 1,
      ...item,
    },
  };
};
export default ACTIONS;

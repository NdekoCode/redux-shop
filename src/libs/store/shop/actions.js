import { v4 as uuid } from "uuid";
/**
 * definitions des actions
 */
const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};
const { ADD_TO_CART, UPDATE_CART } = ACTIONS;
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: uuid(),
      quantity: 1,
      ...item,
    },
  };
};
export const updateCart = (updateData, quantity) => {
  return {
    type: UPDATE_CART,
    payload: { ...updateData, quantity },
  };
};
export default ACTIONS;

import { uuid } from "../../utils";

/**
 * definitions des actions
 */
const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};
const { ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART } = ACTIONS;
export const addToCart = (item) => {
  const quantity = item.quantity ? item.quantity : 1;
  return {
    type: ADD_TO_CART,
    payload: {
      id: uuid(),
      quantity,
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
export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
export default ACTIONS;

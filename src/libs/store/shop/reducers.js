import ACTIONS from "./actions";

const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } = ACTIONS;
const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [action.payload, ...state.cartItems] };

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
    default:
      return state;
  }
};

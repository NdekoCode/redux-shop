import ACTIONS from "./actions";

const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } = ACTIONS;
const initialState = {
  items: [],
};
const shopOnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return { ...state, cart: [] };
    }
    case REMOVE_FROM_CART:
      return state;
    case UPDATE_CART:
      return state;
    default:
      return state;
  }
};

import { useReducer } from "react";
const incrementReducer = (state, action) => {
  switch (action.type) {
    case "incr":
      return { ...state, count: state.count + 1 };
    case "decr":
      if (state.count > 1) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
};
export function useIncrement(initialValue = { count: 1 }) {
  const [count, incrementDispatch] = useReducer(incrementReducer, initialValue);
  return [count, incrementDispatch];
}

export const uuid = () => Math.random().toString(34).slice(2);
export const saveToLocalStorage = (object, key = "cartItems") => {
  localStorage.setItem(key, JSON.stringify(object));
};
export const getFromLocal = (key = "cartItems") =>
  JSON.parse(localStorage.getItem(key));

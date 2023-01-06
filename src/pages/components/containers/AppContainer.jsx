import { connect } from "react-redux";
import App from "../../../App";
import {
  addToCart,
  removeFromCart,
  saveCart,
  updateCart,
} from "../../../libs/store/shop/actions";
import { getAllItems } from "../../../libs/store/shop/selectors";
const mapStateToProps = getAllItems;
const mapDispatchToProps = (dispatch) => ({
  add: (item) => dispatch(addToCart(item)),
  remove: (item) => dispatch(removeFromCart(item)),
  update: (item) => dispatch(updateCart(item)),
  saveToLocal: (item) => dispatch(saveCart(item)),
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;

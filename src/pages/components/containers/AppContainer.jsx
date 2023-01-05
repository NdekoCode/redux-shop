import { connect } from "react-redux";
import App from "../../../App";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../../../libs/store/shop/actions";
import { getItems } from "../../../libs/store/shop/selectors";
const mapStateToProps = getItems;
const mapDispatchToProps = (dispatch) => ({
  add: (item) => dispatch(addToCart(item)),
  remove: (item) => dispatch(removeFromCart(item)),
  update: (item) => dispatch(updateCart(item)),
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;

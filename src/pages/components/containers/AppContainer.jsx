import { connect } from "react-redux";
import App from "../../../App";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../../../libs/store/shop/actions";
import { getCartItems } from "../../../libs/store/shop/selectors";
const mapStateToProps = getCartItems;
const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (item) => dispatch(addToCart(item)),
  onRemoveCart: (item) => dispatch(removeFromCart(item)),
  onUpdateCart: (item) => dispatch(updateCart(item)),
});
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;

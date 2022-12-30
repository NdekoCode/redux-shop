import { connect } from "react-redux";
import { saveCart } from "../../libs/actions";
import App from "../components/index";

export const AppContainer = connect(
  function mapStateToProps(state) {
    return { items: state.items };
  },
  function mapDispatchToProps(dispatch) {
    return {
      saveLocalStorage: (items) => dispatch(saveCart(items)),
    };
  }
)(App);

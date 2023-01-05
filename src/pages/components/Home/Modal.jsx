import { memo } from "react";
import { connect } from "react-redux";
import { useIncrement } from "../../../libs/hooks/useIncrement";
import { addToCart } from "../../../libs/store/shop/actions";
import { getCartItems } from "../../../libs/store/shop/selectors";

const Modal = memo(({ item, add }) => {
  const [{ count }, dispatch] = useIncrement();
  item.quantity = count;
  const increment = () => {
    dispatch({ type: "incr" });

    item.quantity = count;
  };
  const decrement = () => {
    dispatch({ type: "decr" });
    item.quantity = count;
  };
  return (
    <>
      <div
        className="modal fade"
        id={item.ref}
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {item.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    width={170}
                    height={170}
                    src={`/assets/${item.category}/${item.image}`}
                    alt={item.name}
                  />
                </div>
                <div className="col-sm">
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h3 className="price">{`€${item.price}/${item.unit}`}</h3>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <span className="btn btn-light qty">{item.quantity}</span>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={() => {
                  console.log(item);
                  add(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const mapDispatchToProps = (dispatch) => ({
  add: (item) => dispatch(addToCart(item)),
});

export default connect(getCartItems, mapDispatchToProps)(Modal);

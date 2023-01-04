import { memo } from "react";
import { useIncrement } from "../../../libs/hooks/useIncrement";

const Modal = memo(({ item, incrementCart }) => {
  const [state, dispatch] = useIncrement();
  const increment = () => dispatch({ type: "incr" });
  const decrement = () => dispatch({ type: "decr" });
  return (
    <>
      <div
        className="modal fade "
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
                    <span className="btn btn-light qty">{state.count}</span>
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
                onClick={incrementCart}
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
export default Modal;

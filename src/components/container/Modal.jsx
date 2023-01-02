const Modal = ({ item }) => {
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
                {"{"}item.name{"}"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    width={170}
                    height={170}
                    src="/assets/0/citron.png"
                    alt="Citron"
                  />
                </div>
                <div className="col-sm">
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <h3 className="price">€3/unit</h3>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      -
                    </button>
                    <span className="btn btn-light qty" />
                    <button type="button" className="btn btn-secondary">
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
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;

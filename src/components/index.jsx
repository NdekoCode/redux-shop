export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img width="170" height="170" src="/assets/0/citron.png" alt="Citron" />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>Citron</h4>
            </div>
            <div className="col-sm-6">
              <p>€3/unit </p>
              <button className="btn btn-warning btn-sm">view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export const Modal = ({ item }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const add = (item, quantity) => {
    dispatch(addtoCart(item, quantity));
  };
  return (
    <div
      class="modal fade "
      id=""
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {item.name}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src="/assets/0/citron.png"
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p class="lead">
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
                  <span className="btn btn-light qty">{qty}</span>
                  <button type="button" className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success" data-dismiss="modal">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

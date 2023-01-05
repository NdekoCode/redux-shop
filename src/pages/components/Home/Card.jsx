import Modal from "./Modal";

const Card = ({ item, incrementCart }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={`/assets/${item.category}/${item.image}`}
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>{`€${item.price}/${item.unit}`}</p>
              <button
                className="btn btn-warning btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#${item.ref}`}
              >
                view product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal item={item} />
    </div>
  );
};
export default Card;

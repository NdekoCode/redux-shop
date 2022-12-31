const Card = (props) => {
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
export default Card;

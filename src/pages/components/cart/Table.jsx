export const Row = () => {
  return (
    <tr>
      <td>
        <img width="70" height="70" src={`/assets/0/citron.png`} alt="Citron" />
      </td>
      <td>Citron</td>
      <td>€4</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {}}
          >
            -
          </button>
          <span className="btn btn-light">1</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {}}
          >
            +
          </button>
        </div>
      </td>
      <td>€4</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => {}}
        >
          X
        </button>
      </td>
    </tr>
  );
};
const Table = () => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th width="200">Product</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>
    </thead>
    <tbody>
      <Row />
    </tbody>
  </table>
);
export default Table;

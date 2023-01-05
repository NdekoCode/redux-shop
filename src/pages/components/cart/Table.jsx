export const Row = ({ item }) => {
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={`/assets/${item.category}/${item.image}`}
          alt={item.name}
        />
      </td>
      <td>{item.name}</td>
      <td>€{item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {}}
          >
            -
          </button>
          <span className="btn btn-light">{item.quantity}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {}}
          >
            +
          </button>
        </div>
      </td>
      <td>€{(item.price * item.quantity).toFixed(2)}</td>
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
const Table = ({ items }) => {
  return (
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
        {items.map((item) => (
          <Row item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;

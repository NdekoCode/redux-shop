import { useDispatch } from "react-redux";
import { useIncrement } from "../../../libs/hooks/useIncrement";
import { removeFromCart, updateCart } from "../../../libs/store/shop/actions";

export const Row = ({ item }) => {
  const dispatch = useDispatch();
  const [{ count }, dispatchCount] = useIncrement(item.quantity);
  const increment = () => {
    dispatchCount({ type: "incr" });
    update(item, count);
  };
  const decrement = () => {
    dispatchCount({ type: "decr" });
    update(item, count);
  };
  const update = (item, count) => dispatch(updateCart(item, count));
  const remove = (item) => dispatch(removeFromCart(item));
  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={`/assets/${item.category}/${item.image}`}
          alt={item.name}
          title={item.name}
        />
      </td>
      <td>{item.ref}</td>
      <td>€{item.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={decrement}
          >
            -
          </button>
          <span className="btn btn-light">{count}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={increment}
          >
            +
          </button>
        </div>
      </td>
      <td>€{(item.price * count).toFixed(2)}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => remove(item)}
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

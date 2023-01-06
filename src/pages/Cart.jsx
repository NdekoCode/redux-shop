import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import Table from "./components/cart/Table";

const Cart = ({ cartItems }) => {
  const shipping = 10;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const totalPrice = useMemo(
    () => cartItems.map((item) => item.price * item.quantity),
    [cartItems]
  );
  useEffect(() => {
    if (cartItems.length > 0) {
      setSubTotal(totalPrice.reduce((a, b) => a + b));
      setTotal(subTotal + shipping);
      console.log(totalPrice);
    }
  }, [subTotal, total, cartItems]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            {/* Table */}
            <Table items={cartItems} />
          </div>

          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">
                    € <b>{subTotal.toFixed(2)}</b>
                  </li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">
                    € <b>{shipping.toFixed(2)}</b>
                  </li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">
                    € <b>{total.toFixed(2)}</b>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn w-100 btn-light btn-lg d-block checkout bg-crimson"
              disabled={!cartItems.length}
            >
              <Link href="/checkout" className="white d-block">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(({ cartItems }) => ({ cartItems }))(Cart);

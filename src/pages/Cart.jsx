import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./components/cart/Table";

const Cart = ({ cartItems }) => {
  const shipping = 10.0;
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    if (cartItems.length) {
      const totalPrice = cartItems.map((item) => item.price * item.quantity);
      setSubTotal(totalPrice.reduce((a, b) => a + b));
      setTotal(Math.abs(subTotal + shipping));
    }
  }, [subTotal, cartItems]);

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
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled={true}
            >
              <a href="#" className="white">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(({ cartItems }) => ({ cartItems }))(Cart);

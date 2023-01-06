import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../Confirm.css";
import UseUserContext from "../libs/context/useProfileContext";
import { resetCart } from "../libs/store/shop/actions";
import { getCartItems } from "../libs/store/shop/selectors";
import SVGTruck from "./components/Confirm/SVGTruck";

export const Confirm = () => {
  const { cartItems } = useSelector(getCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
  }, [cartItems]);
  const reset = (e) => {
    e.preventDefault();
    dispatch(resetCart());
    navigate("/");
  };
  const { formData } = UseUserContext();
  const { firstName, lastName, address, zipCode, city } = formData;

  return (
    <>
      <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        <hr />

        <p class="lead">
          <strong>Your order is on its way to your home</strong>
          <br /> <br />
          <Link class="btn btn-primary btn-sm" to="/" onClick={reset}>
            Continue to homepage
          </Link>
        </p>
        <br />

        {address && (
          <ul className="address">
            <li>
              {lastName.toUpperCase()}, {firstName}
            </li>
            <li>{address}</li>
            <li>
              {zipCode}, {city}
            </li>
          </ul>
        )}
      </div>
      <SVGTruck />
    </>
  );
};

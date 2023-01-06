import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UseUserContext from "../libs/context/useProfileContext";
import { getCartItems } from "../libs/store/shop/selectors";

const Checkout = () => {
  const { cartItems } = useSelector(getCartItems);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cartItems.length) {
      navigate("/");
    }
  }, [cartItems]);
  const { isValid, validate, formData, handleChangeProfile } = UseUserContext();
  const { firstName, lastName, email, address, zipCode, city } = formData;

  useEffect(() => {
    validate(formData);
  }, [formData]);
  return (
    <div className="col-sm-6 offset-3">
      <h2>Checkout</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                property=""
                name="firstName"
                value={firstName}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                property=""
                name="lastName"
                value={lastName}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email address"
            property=""
            name="email"
            value={email}
            onChange={handleChangeProfile}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Address"
            property=""
            name="address"
            value={address}
            onChange={handleChangeProfile}
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                name="zipCode"
                property=""
                value={zipCode}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                property=""
                value={city}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          // disabled={true}
          className={`w-100 ${
            !isValid && "disabled"
          }  btn btn-light btn-lg btn-block bg-crimson checkout `}
        >
          <Link to="/delivery" className="white">
            Confirm
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Checkout;

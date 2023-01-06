import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UseUserContext from "../libs/context/useProfileContext";

const Checkout = () => {
  const { isValid, validate, formData, handleChangeProfile } = UseUserContext();
  const { firstName, lastName, email, address, zipCode, city } = formData;

  useEffect(() => {
    validate(formData);
  }, [formData]);
  return (
    <div className="col-sm-6 offset-3">
      <h2>Checkout</h2>
      <form>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                property=""
                name="firstName"
                defaultValue={firstName}
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
                defaultValue={lastName}
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
            defaultValue={email}
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
            defaultValue={address}
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
                defaultValue={zipCode}
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
                defaultValue={city}
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

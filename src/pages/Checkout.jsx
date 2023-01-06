import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const formData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
  };
  const { firstName, lastName, email, address, zipCode, city } = formData;
  return (
    <>
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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
              onChange={() => {}}
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
              onChange={() => {}}
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
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  city="city"
                  property=""
                  defaultValue={city}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <br />
          {/*${
              !isValid && "disabled"
            }*/}
          <button
            type="submit"
            disabled={true}
            className={` white btn btn-light btn-lg btn-block bg-crimson checkout `}
          >
            <Link to="/delivery">Confirm</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;

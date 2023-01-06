import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [isValid, setValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
  });
  const validate = useCallback(
    (fields) => {
      const errors = {};
      for (let field in fields) {
        if (fields[field].trim().length < 2) {
          errors[field] = `${field} est requis`;
          break;
        }
      }
      setValid(Object.keys(errors).length < 1);
      return Object.keys(errors).length < 1;
    },
    [formData]
  );

  const handleChange = useCallback(
    (evt) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setFormData((state) => ({ ...state, [name]: value }));
    },
    [formData]
  );
  const { firstName, lastName, email, address, zipCode, city } = formData;

  useEffect(() => {
    validate(formData);
  }, [formData]);
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
    </>
  );
};

export default Checkout;

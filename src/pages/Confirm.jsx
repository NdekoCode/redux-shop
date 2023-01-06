import React from "react";
import { Link } from "react-router-dom";
import "../../Confirm.css";
import UseUserContext from "../libs/context/useProfileContext";
import SVGTruck from "./components/Confirm/SVGTruck";

export const Confirm = () => {
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
          <Link class="btn btn-primary btn-sm" to="/" onClick={() => {}}>
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

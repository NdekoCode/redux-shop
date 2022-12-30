import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtoCart } from "../libs/actions";

export const Navbar = ({ filter, setFiltering }) => {
  const items = useSelector((state) => state.items);
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand crimson" to="/">
        {" "}
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0);
                  filter(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="menu-right">
            <Link to="/cart">
              <i className="fas fa-shopping-bag fa-2x grey"></i>
            </Link>
            <span className="badge badge-pill badge-success">
              {items.length > 0 && items.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = (props) => {
  const { item, count } = props;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={`/assets/${item.category}/${item.image}`}
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                €{item.price}/{item.unit}
              </p>
              <button
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target={`#${item.ref}`}
              >
                view product
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} count={count} />
    </div>
  );
};

export const Modal = ({ item }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const add = (item, quantity) => {
    dispatch(addtoCart(item, quantity));
  };
  return (
    <div
      className="modal fade "
      id={item.ref}
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {item.name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={`/assets/${item.category}/${item.image}`}
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">
                  €{item.price}/{item.unit}
                </h3>{" "}
                <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    type="button"
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  <span className="btn btn-light qty">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    type="button"
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => add(item, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const List = (props) => {
  const { data } = props;

  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item) => (
          <Card key={item.ref} item={item} />
        ))}
      </div>
    </div>
  );
};

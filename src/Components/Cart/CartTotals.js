import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, CartTax, CartDelivery, CartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear your cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>$ {CartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">delivery fee : </span>
              <strong>$ {CartDelivery}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>$ {CartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

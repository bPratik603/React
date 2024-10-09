import React from "react";
import CartServices from "../CartServices";

function Service() {
  return (
    <div className="bg-secondary-subtle">
      <p
        className="pt-5 text-success fw-bold text-center"
        style={{ fontSize: "20px" }}
      >
        Our Services
      </p>
      <h1 className="h1 fw-bold text-center">
        <span style={{ color: "orangered" }}>Premium</span>{" "}
        <span style={{ color: "black" }}>Pet Services</span>
      </h1>
      <CartServices />
    </div>
  );
}

export default Service;

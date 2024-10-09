import React from "react";
import Plan_Cards from "./Plan_Cards";

function Plan() {
  return (
    <div className="bg-secondary-subtle pb-5">
      <p
        className="pt-5 text-success fw-bold text-center"
        style={{ fontSize: "20px" }}
      >
        Pricing Plan
      </p>
      <h1 className="h1 fw-bold text-center">
        <span style={{ color: "orangered" }}>Choose the</span>{" "}
        <span style={{ color: "black" }}>Best Price</span>
      </h1>
      <Plan_Cards />
    </div>
  );
}

export default Plan;

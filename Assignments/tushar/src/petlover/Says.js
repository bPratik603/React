import React from "react";

function Says() {
  return (
    <div className="bg-secondary-subtle pb-5">
      <p
        className="pt-5 text-success fw-bold text-center"
        style={{ fontSize: "20px" }}
      >
        Testimonial
      </p>
      <h1 className="h1 fw-bold text-center">
        <span style={{ color: "black" }}>Our Client</span>{" "}
        <span style={{ color: "orangered" }}>Says</span>
      </h1>
    </div>
  );
}

export default Says;

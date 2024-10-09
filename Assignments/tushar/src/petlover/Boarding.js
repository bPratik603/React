import React from "react";

import Button from "react-bootstrap/Button";
import { FaCheckDouble } from "react-icons/fa6";
function BoardingPet() {
  return (
    <div className="m-5">
      <p className="text-success fw-bold mt-5" style={{ fontSize: "20px" }}>
        About Us
      </p>
      <h1 className="h1 fw-bold">
        <span style={{ color: "orangered" }}>Boarding</span>{" "}
        <span style={{ color: "black" }}>&</span>
        <br></br>
        <span style={{ color: "green" }}>Daycare</span>
      </h1>
      <p className="fw-semibold">
        Amet stet amer ut. sit no vero vero no dolor. sed erat ut sea. Just
        clita ut stet kasd at diam sit erat vero sit.
      </p>
      <p>
        Dolores lorem lorem ipsum sit et ipsum . Sadip sea amer diam dolore sed
        et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit
        et sed ipsum st kasd ut, Erat duo eos st srat sed diam duo
      </p>

      <h6 className="fw-bold">
        <FaCheckDouble />
        <span className="ps-2">Best In Industry</span>
      </h6>
      <h6 className="fw-bold">
        <FaCheckDouble />
        <span className="ps-2">Emergency Services</span>
      </h6>
      <h6 className="fw-bold">
        <FaCheckDouble />
        <span className="ps-2">24/7 Customer Support</span>
      </h6>
      <Button variant="danger" className="mt-3">
        Learn More
      </Button>
    </div>
  );
}

export default BoardingPet;

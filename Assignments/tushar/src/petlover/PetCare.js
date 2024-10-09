import React from "react";
import { MdOutlineAddHomeWork } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiCat } from "react-icons/pi";
import { PiDog } from "react-icons/pi";
import { LiaUserNurseSolid } from "react-icons/lia";
function PetCare() {
  return (
    <div className="p-3">
      <p className="text-success fw-bold mt-3" style={{ fontSize: "20px" }}>
        Why Choose Us ?
      </p>
      <h1 className="fw-bold" style={{ fontSize: "45px" }}>
        <span style={{ color: "orangered" }}>Special Care </span>
        <span>
          On <br></br>Pets
        </span>{" "}
      </h1>
      <p style={{ paddingRight: "30px" }} className="pb-3">
        Dolor lorem lorem ipsum sit et ipsum, Sadip sea amet diam sed ut vero no
        sit Et elitr stet sed sit sed kasd. Erat suo eos et erat sed diam duo
      </p>

      <div className="boarding">
        <div>
          <h2 className="fs-5 px-4">
            <PiCat />
            <span className="ps-1"> Best In Industry</span>
          </h2>
        </div>

        <div>
          <h2 className="fs-5 px-4">
            <LiaUserNurseSolid />

            <span className="ps-2">Emergency Services</span>
          </h2>
        </div>
        <div>
          <h2 className="fs-5 px-4">
            <FaHandHoldingHeart />
            <span className="ps-2">Special Care</span>
          </h2>
        </div>
        <div>
          <h2 className="fs-5 px-4">
            <PiDog />
            <span className="ps-2">Customer Support</span>
          </h2>
        </div>
      </div>
    </div>

    // <Col lg={6} md={12}>
    //   <h5 style={{ color: "green" }}>Why Choose Us?</h5>
    //   <h1 style={{ color: "orange", fontWeight: "bold" }}>
    //     Special Care On <span style={{ color: "black" }}>Pets</span>
    //   </h1>
    //   <p>
    //     Dolor lorem ipsum sit et ipsum. Sadip sea amet diam sed ut vero no sit.
    //     Et elitr stet sed sit sed kasd. Erat duo eos et erat sed diam duo.
    //   </p>

    //   {/* Features Section */}
    //   <Row className="mt-4">
    //     <Col xs={6}>
    //       <p>
    //         <i
    //           className="bi bi-award"
    //           style={{ fontSize: "1.5rem", color: "green" }}
    //         ></i>{" "}
    //         Best In Industry
    //       </p>
    //       <p>
    //         <i
    //           className="bi bi-heart"
    //           style={{ fontSize: "1.5rem", color: "green" }}
    //         ></i>{" "}
    //         Special Care
    //       </p>
    //     </Col>
    //     <Col xs={6}>
    //       <p>
    //         <i
    //           className="bi bi-gear"
    //           style={{ fontSize: "1.5rem", color: "green" }}
    //         ></i>{" "}
    //         Emergency Services
    //       </p>
    //       <p>
    //         <i
    //           className="bi bi-headset"
    //           style={{ fontSize: "1.5rem", color: "green" }}
    //         ></i>{" "}
    //         Customer Support
    //       </p>
    //     </Col>
    //   </Row>
    // </Col>
  );
}

export default PetCare;

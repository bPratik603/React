import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../img/about-1.jpg";
import img2 from "../img/about-2.jpg";
import img3 from "../img/about-3.jpg";

function Boarding_Images() {
  return (
    <Container className="about_images">
      <Row>
        <Col>
          <img src={img1} alt="Top Image" className="img-fluid w-100" />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <img src={img2} alt="Left Image" className="img-fluid" />
        </Col>
        <Col md={6}>
          <img src={img3} alt="Right Image" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Boarding_Images;

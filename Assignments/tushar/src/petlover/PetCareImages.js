import React from "react";

import img1 from "../img/feature.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function PetCareImages() {
  return (
    <Container className="about_images">
      <Row>
        <Col>
          <img src={img1} alt="Top Image" className="img-fluid w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default PetCareImages;

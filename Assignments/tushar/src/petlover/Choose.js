import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PetCareImages from "./PetCareImages";
import PetCare from "./PetCare";

function Choose() {
  return (
    <div className="bg-white container-fluid">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <PetCareImages />
          </Col>
          <Col lg={8} md={8} sm={12}>
            <PetCare />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Choose;

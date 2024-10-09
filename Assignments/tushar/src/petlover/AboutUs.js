import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formm from "./Form";
import BookForYourPet from "./BookForYourPet";
import BoardingPet from "./Boarding";
import Boarding_Images from "./Boarding_Images";

function AboutUs() {
  return (
    <div className="bg-white container-fluid">
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <BoardingPet />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Boarding_Images />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;

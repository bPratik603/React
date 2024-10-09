// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";
import image1 from "../img/price-1.jpg";
import image2 from "../img/price-2.jpg";
import image3 from "../img/price-3.jpg";

function Plan_Cards() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          {/* <Card style={{ width: "18rem" }}> */}
          <Card className="text-center shadow-sm mb-3">
            <Card.Img variant="top" src={image1} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item className="pt-3">✔️ Feeding</ListGroup.Item>
              <ListGroup.Item>✔️ Boarding</ListGroup.Item>
              <ListGroup.Item>❌ Spa & Grooming</ListGroup.Item>
              <ListGroup.Item className="pb-4">
                ❌ Veterinary Medicine
              </ListGroup.Item>
              <ListGroup.Item className="bg-danger text-light">
                Signup Now
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-3">
            <Card.Img variant="top" src={image2} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item className="pt-3">✔️ Feeding</ListGroup.Item>
              <ListGroup.Item>✔️ Boarding</ListGroup.Item>
              <ListGroup.Item>✔️ Spa & Grooming</ListGroup.Item>
              <ListGroup.Item className="pb-4">
                ❌ Veterinary Medicine
              </ListGroup.Item>
              <ListGroup.Item className="bg-success text-dark">
                Signup Now
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center mb-3">
            <Card.Img variant="top" src={image3} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item className="pt-3">✔️ Feeding</ListGroup.Item>
              <ListGroup.Item>✔️ Boarding</ListGroup.Item>
              <ListGroup.Item>✔️ Spa & Grooming</ListGroup.Item>
              <ListGroup.Item className="pb-4">
                ✔️ Veterinary Medicine
              </ListGroup.Item>
              <ListGroup.Item className="bg-danger text-light">
                Signup Now
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Plan_Cards;

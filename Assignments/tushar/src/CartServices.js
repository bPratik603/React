import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CartServices = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>🏠</div>
              <Card.Title>Pet Boarding</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>{"🍖"}</div>
              <Card.Title>Pet Feeding</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>✂️</div>
              <Card.Title>Pet Grooming</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>😺</div>
              <Card.Title>Pet Training</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>🐶</div>
              <Card.Title>Pet Exercise</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} xs={12} className="mb-4">
          <Card className="h-100 text-center px-5">
            <Card.Body>
              <div style={{ fontSize: "50px", color: "green" }}>💉</div>
              <Card.Title>Pet Treatment</Card.Title>
              <Card.Text>
                Diam amet eos at no eos sit lorem,amet rebum ipsum clita stet,
                diam sea est magna diam eos,rebum sit vero stet ipsum justo
              </Card.Text>
              <a
                href="#"
                className="btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartServices;

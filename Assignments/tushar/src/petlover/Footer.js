import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 ">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <h1 className="fw-bold">
              <span style={{ color: "orangered" }}>Pet</span>Lover
            </h1>
            <p>
              Ipsum amet sed vero et lorem stet eos ut, labore sed sed stet sea
              est ipsum ut. Volup amet ea sanct ipsum, dolore vero lorem no duo
              eirmod.Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem
              ea lorem sed, amet stet sit sea ea diam tempor kasd. Diam nonumy
              etsit tempor ut sed diam sed et ea
            </p>
          </Col>

          <Col md={6} lg={3}>
            <h5 style={{ color: "orangered" }}>Get In Touch</h5>
            <p className="pt-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </p>
            <p>
              <FaPhone /> +012 345 67890
            </p>
            <p>
              <FaEnvelope /> info@example.com
            </p>
            <div className="social-icons mt-4 mb-3">
              <a
                className="text-light me-2"
                style={{
                  border: "1px solid",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <FaTwitter />
              </a>
              <a
                className="text-light me-2"
                style={{
                  border: "1px solid",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <FaFacebookF />
              </a>
              <a
                className="text-light me-2"
                style={{
                  border: "1px solid",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <FaLinkedinIn />
              </a>
              <a
                className="text-light"
                style={{
                  border: "1px solid",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={6} lg={2}>
            <h5 style={{ color: "orangered" }}>Popular Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a className="text-light" style={{ textDecoration: "none" }}>
                  <span className="me-2">
                    <FaGreaterThan />
                  </span>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <span className="me-2">
                    <FaGreaterThan />
                  </span>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <span className="me-2">
                    <FaGreaterThan />
                  </span>
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <span className="me-2">
                    <FaGreaterThan />
                  </span>
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <span className="me-2">
                    <FaGreaterThan />
                  </span>
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3}>
            <h5 style={{ color: "orangered" }}>Newsletter</h5>
            <Form>
              <Form.Group controlId="formName" className="mb-2 mt-4">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-2 mt-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                className="w-100 mt-2 text-light"
              >
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className=" mt-5">
          <Col md={12} className="text-light">
            <p>
              <span>
                © Your Site Name. All Rights Reserved. Designed by HTML Codex
              </span>
              <span style={{ float: "right" }}>
                <a
                  href="#"
                  className="text-light me-5"
                  style={{ textDecoration: "none" }}
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-light me-5"
                  style={{ textDecoration: "none" }}
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-light me-5"
                  style={{ textDecoration: "none" }}
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="text-light me-3"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

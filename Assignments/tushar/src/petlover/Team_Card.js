import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../img/team-1.jpg";
import image2 from "../img/team-2.jpg";
import image3 from "../img/team-3.jpg";
import image4 from "../img/team-4.jpg";

function Team_Card() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={6} xl={3}>
          <Card style={{ width: "auto" }} className="text-center mb-3">
            <Card.Img variant="top" src={image1} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Mollie Ross</Card.Title>
              <Card.Text>Founder & CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={3}>
          <Card style={{ width: "auto" }} className="text-center mb-3">
            <Card.Img variant="top" src={image2} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Jennifer Page</Card.Title>
              <Card.Text>Chef Executive</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={3}>
          <Card style={{ width: "auto" }} className="text-center mb-3">
            <Card.Img variant="top" src={image3} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Kate Glover</Card.Title>
              <Card.Text>Doctor</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={3}>
          <Card style={{ width: "auto" }} className="text-center mb-3">
            <Card.Img variant="top" src={image4} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Lilly Fry</Card.Title>
              <Card.Text>Trainer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Team_Card;

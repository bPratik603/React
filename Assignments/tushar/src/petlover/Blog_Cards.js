import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { TiMessages } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import image1 from "../img/blog-1.jpg";
import image2 from "../img/blog-2.jpg";
import image3 from "../img/blog-3.jpg";
import { FaFolder } from "react-icons/fa";
function Blog_Cards() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={6} xl={4}>
          <Card style={{ width: "auto" }} className="mb-3">
            <Card.Img variant="top" src={image1} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Diam amet eos at no eos</Card.Title>
              <Card.Text>
                <span className="pe-2">
                  <FaUser />
                </span>
                Admin
                <span className="pe-2 ps-2">
                  <FaFolder />
                </span>
                Web Design
                <span className="pe-2 ps-2">
                  <TiMessages />
                </span>
                15
              </Card.Text>
              <Card.Text>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam eos, rebum sit vero stet justo
              </Card.Text>
              <Card.Text className="fw-bold" style={{ color: "orangered" }}>
                Read More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <Card style={{ width: "auto" }} className="mb-3">
            <Card.Img variant="top" src={image2} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Diam amet eos at no eos</Card.Title>
              <Card.Text>
                <span className="pe-2">
                  <FaUser />
                </span>
                Admin
                <span className="pe-2 ps-2">
                  <FaFolder />
                </span>
                Web Design
                <span className="pe-2 ps-2">
                  <TiMessages />
                </span>
                15
              </Card.Text>
              <Card.Text>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam eos, rebum sit vero stet justo
              </Card.Text>
              <Card.Text className="fw-bold" style={{ color: "orangered" }}>
                Read More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <Card style={{ width: "auto" }} className="mb-3">
            <Card.Img variant="top" src={image3} />
            <Card.Body className="bg-secondary-subtle">
              <Card.Title>Diam amet eos at no eos</Card.Title>
              <Card.Text>
                <span className="pe-2">
                  <FaUser />
                </span>
                Admin
                <span className="pe-2 ps-2">
                  <FaFolder />
                </span>
                Web Design
                <span className="pe-2 ps-2">
                  <TiMessages />
                </span>
                15
              </Card.Text>
              <Card.Text>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam eos, rebum sit vero stet justo
              </Card.Text>
              <Card.Text className="fw-bold" style={{ color: "orangered" }}>
                Read More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog_Cards;

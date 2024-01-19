import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "./OurTechnologies.css";

function OurTechnologies() {
  return (
    <Container fluid>
      <Row className="text-center pt-5">
        <p>OUR TECHNOLOGIES</p>
        <h1 className="how-we-work-title">How We Make Things</h1>
        <p className="our-capabilities-description">
          We are ready to assist you in any way and at any point within the
          product development cycle.
        </p>
      </Row>
      <Row className="text-center m-5 px-5">
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
      </Row>

      <Row className="text-center m-5 px-5">
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
        <Col className="px-5 mx-3">
          <Card body className="w-50 tech-card">
            <Image
              src="/src/assets/gradient-tech-icon/nextjs.png"
              width="14px"
              height="14px"
              className="me-3"
            />
            NextJS
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OurTechnologies;

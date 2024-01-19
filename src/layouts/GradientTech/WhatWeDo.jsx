import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <Container className="justify-content-center mt-5 what-we-do-container">
      <Row className="text-center pt-5">
        <p>OUR SERVICES</p>
        <h1>What We Do</h1>
        <p className="what-we-do-description">
          We are ready to assist you in any way and at any point within the
          product development cycle.
        </p>
      </Row>
      <Row className="justify-content-center card-section mt-5">
        <Col className="px-0 mx-5">
          <Card bg="light" className="border-0">
            <Card.Body>
              <Card.Title>Technical Cofounder as a Service</Card.Title>
              <Card.Text>
                Starting a new venture but don&apos;t have a technical
                co-founder yet? Our team will work with you end-to-end to bring
                your vision to life and achieve your goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" className="border-0">
            <Card.Body>
              <Card.Title>Web and Mobile App Development</Card.Title>
              <Card.Text>
                We build high-quality web and mobile applications designed to
                meet your exact needs. From new applications to system
                integrations, we&apos;ve got you covered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center card-section">
        <Col className="px-0 mx-5">
          <Card bg="light" className="border-0">
            <Card.Body>
              <Card.Title>Product Ideation and Design</Card.Title>
              <Card.Text>
                Bringing a new product to market is a complex process. We help
                you refine your ideas and turn them into successful products
                through customer testing, prototyping, and design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" className="border-0">
            <Card.Body>
              <Card.Title>Specialty and Advisory Services</Card.Title>
              <Card.Text>
                Our expertise extends beyond the traditional bounds of a
                software agency. We are a team of curious individuals with
                expertise in cutting edge tech, such as dApps and AI/ML.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row className="mt-4">
        <Col className="px-0">
          <Card>
          <Card.Body>
              <Card.Title>Technical Cofounder as a Service</Card.Title>
              <Card.Text>
                Starting a new venture but don't have a technical co-founder
                yet? Our team will work with you end-to-end to bring your vision
                to life and achieve your goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Body>
              <Card.Title>Technical Cofounder as a Service</Card.Title>
              <Card.Text>
                Starting a new venture but don't have a technical co-founder
                yet? Our team will work with you end-to-end to bring your vision
                to life and achieve your goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
}

export default WhatWeDo;

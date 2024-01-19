import { Button, Col, Container, Row } from "react-bootstrap";
import "./PartnerWithUs.css";

function PartnerWithUs() {
  return (
    <Container
      fluid
      className="gradient-studio-background justify-content-center align-items-center text-white px-5"
    >
      <Row>
        <Col className="text-center partner-with-us-container">
          <p className="my-5 partner-with-us-section">PARTNER WITH US</p>
          <h1 className="partner-with-us-title mb-4">
            We partner with entrepreneurs and corporations to develop meaningful
            ideas
          </h1>
          <p className="partner-with-us-description">
            Leverage your capabilities and take part in creating new companies
            with lasting competitive advantage.
          </p>
          <Button
            variant="outline-light"
            className="mt-4 rounded-pill partner-with-us-button px-5"
            size="lg"
          >
            Build with us
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PartnerWithUs;

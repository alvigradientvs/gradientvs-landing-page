import { Button, Col, Row } from "react-bootstrap";
import "./BuildWithUs.css";

function BuildWithUs() {
  return (
    <div className="gradient-tech-background text-white px-5">
      <Row>
        <Col className="text-center build-with-us-container">
          <div className="section-text text-white">BUILD WITH US</div>
          <div className="build-with-us-title mb-4 mt-5">
            Imagine and create your apps and digital products today
          </div>
          <p className="build-with-us-description">
            Leverage your capabilities and take part in creating new companies
            with lasting competitive advantage.
          </p>
          <Button
            variant="outline-light"
            className="mt-4 rounded-pill partner-with-us-button px-5"
            size="lg"
            href="www.gradientvs.com"
          >
            Build with us
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default BuildWithUs;

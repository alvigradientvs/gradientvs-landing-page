import { Button, Col, Row } from "react-bootstrap";
import "./PartnerWithUs.css";

function PartnerWithUs() {
  return (
    <div className="gradient-studio-background text-white px-5">
      <Row>
        <Col className="text-center partner-with-us-container">
          <div className="section-text text-white">PARTNER WITH US</div>
          <div className="partner-with-us-title mb-4 mt-5">
            We partner with entrepreneurs and corporations to develop meaningful
            ideas
          </div>
          <p className="partner-with-us-description">
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

export default PartnerWithUs;

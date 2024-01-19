import { Container, Row, Col } from "react-bootstrap";
import ConsultationForm from "../../components/ConsultationForm";
import "./ConsultationSession.css";

function ConsultationSession() {
  return (
    <Container
      fluid
      className="consultation d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row className="consultation-section w-100 text-center">
        <Col>
          <h2 className="text-white">READY TO SHAPE THE FUTURE?</h2>
        </Col>
      </Row>
      <Row className="consultation-title w-100 text-center text-white">
        <Col>
          <h3>Schedule a session for consultation</h3>
        </Col>
      </Row>
      <Row className="consultation-description w-100 text-center px-3 px-md-0">
        <Col>
          <p>
            Get in touch with our team of experts by filling out the form or
            emailing us at <b>hello@gradientvs.com</b> to schedule a
            complimentary 30-minute consultation. We&apos;ll be delighted to
            discuss and provide you with valuable insights and recommendations
            tailored to your specific needs.
          </p>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <ConsultationForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ConsultationSession;

import { Row, Col } from "react-bootstrap";
import ConsultationForm from "../../components/ConsultationForm";
import "./ConsultationSession.css";
import { useRef } from "react";

function ConsultationSession({ setFormRef }) {
  const refForm = useRef(null);

  setFormRef(refForm);

  return (
    <div
      ref={refForm}
      className="consultation justify-content-center py-5"
      style={{ height: "120vh" }}
    >
      <Row className="consultation-section w-100 text-center">
        <Col>
          <h5 className="text-white">READY TO SHAPE THE FUTURE?</h5>
        </Col>
      </Row>
      <Row className="h2-poppins w-100 text-center text-white justify-content-center">
        Schedule a session for consultation
      </Row>
      <Row className="consultation-description text-center">
        <p>
          Get in touch with our team of experts by filling out the form or
          emailing us at <b>hello@gradientvs.com</b> to schedule a complimentary
          30-minute consultation. We&apos;ll be delighted to discuss and provide
          you with valuable insights and recommendations tailored to your
          specific needs.
        </p>
      </Row>
      <div className="row-container">
        <ConsultationForm />
      </div>
    </div>
  );
}

export default ConsultationSession;

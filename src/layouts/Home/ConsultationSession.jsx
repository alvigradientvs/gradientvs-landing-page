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
      className="consultation justify-content-center"
    >
      <Row className="consultation-section w-100 text-center">
          <h5 className="text-white">READY TO SHAPE THE FUTURE?</h5>
      </Row>
      <Row className="h2-poppins w-lg-100 text-center text-white justify-content-center schedule-text">
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
        <ConsultationForm />
    </div>
  );
}

export default ConsultationSession;

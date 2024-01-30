import { Col, Row } from "react-bootstrap";
import "./OurServices.css";

function OurServices() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <div className="gradient-tech-container our-services-container">
      <Row className="text-center">
        <div className="section-text text-dark mb-4">OUR SERVICES</div>
        <h2 className="what-we-do-title">What We Do</h2>
        <div className="text-gray mb-5 mx-auto content-center">
          We are ready to assist you in any way and at any point within the
          product development cycle.
        </div>
      </Row>
      <Row className="card-container justify-content-center mb-3 mt-5">
        <Col className="me-3">
          <div className="single-card">
            <div className="h5-poppins">Technical Cofounder as a Service</div>
            <div className="card-text">
              Starting a new venture but don't have a technical co-founder yet?
              Our team will work with you end-to-end to bring your vision to
              life and achieve your goals.
            </div>
          </div>
        </Col>
        <Col>
          <div className="single-card">
            <div className="h5-poppins">Web and Mobile App Development</div>
            <div className="card-text">
              We build high-quality web and mobile applications designed to meet
              your exact needs. From new applications to system integrations,
              we've got you covered.
            </div>
          </div>
        </Col>
      </Row>

      <Row className="card-container justify-content-center mb-3">
        <Col className="me-3">
          <div className="single-card">
            <div className="h5-poppins">Product Ideation and Design</div>
            <div className="card-text">
              Bringing a new product to market is a complex process. We help you
              refine your ideas and turn them into successful products through
              customer testing, prototyping, and design.
            </div>
          </div>
        </Col>
        <Col>
          <div className="single-card">
            <div className="h5-poppins">Specialty and Advisory Services</div>
            <div className="card-text">
              Our expertise extends beyond the traditional bounds of a software
              agency. We are a team of curious individuals with expertise in
              cutting edge tech, such as dApps and AI/ML.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurServices;

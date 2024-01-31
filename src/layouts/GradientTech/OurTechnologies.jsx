import { Col, Image, Row } from "react-bootstrap";
import "./OurTechnologies.css";

const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

function OurTechnologies() {
  return (
    <div className="our-technologies-container">
      <Row className="text-center">
        <div className="section-text text-dark mb-4">OUR TECHNOLOGIES</div>
        <h2 className="what-we-do-title">How We Make Things</h2>
        <div className="text-gray mb-5 mx-auto content-center">
          We are ready to assist you in any way and at any point within the
          product development cycle.
        </div>
      </Row>
      <Row className="our-technologies-card-container">
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/nextjs.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">Next JS</span>
          </div>
        </Col>
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/reactjs.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">React JS</span>
          </div>
        </Col>
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/nodejs.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">Node JS</span>
          </div>
        </Col>
      </Row>

      <Row className="our-technologies-card-container">
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/aws.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">Amazon Web Services</span>
          </div>
        </Col>
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/flutter.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">Flutter</span>
          </div>
        </Col>
        <Col>
          <div className="our-technologies-single-card">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/gradient-tech-icon/technologies/typescript.png`}
              className="tech-icon"
              alt="icon-logo"
            />
            <span className="text-dark tech-title">Typescript</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurTechnologies;

import { Container, Row } from "react-bootstrap";
import "./OurCapabilities.css";

function OurCapabilities() {
  return (
    <Container
      fluid
      className="justify-content-center mt-5 our-capabilities-container"
    >
      <Row className="text-center text-white pt-5">
        <p>OUR CAPABILITIES</p>
        <h1 className="how-we-work-title">How We Work</h1>
        <p className="our-capabilities-description">
          We start the company building process from scratch by identifying
          opportunities, rigorously testing assumptions, and creating products
        </p>
      </Row>
    </Container>
  );
}

export default OurCapabilities;

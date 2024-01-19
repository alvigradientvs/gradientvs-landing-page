import { Container, Image, Row } from "react-bootstrap";
import "./HowWeWork.css";

function HowWeWork() {
  return (
    <Container fluid className="gradient-studio-background pt-5">
      <Row className="text-center text-white">
        <p className="venture-building-title">VENTURE-BUILDING PLAYBOOK</p>
        <h1 className="mb-3">How We Work</h1>
        <p>
          We start the company building process from scratch by identifying
          opportunities, rigorously testing assumptions, and creating products
        </p>
      </Row>
      <Row>
        <Image src="/src/assets/agile-scrum.png" />
      </Row>
    </Container>
  );
}

export default HowWeWork;

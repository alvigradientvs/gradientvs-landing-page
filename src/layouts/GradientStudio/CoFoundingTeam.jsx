import { Col, Container, Image, Row } from "react-bootstrap";
import "./CoFoundingTeam.css";

function CoFoundingTeam() {
  return (
    <Container fluid className="my-5">
      <Row className="text-center mt-5">
        <h1>
          Your{" "}
          <b>
            <i>superhuman</i>
          </b>{" "}
          co-founding team
        </h1>
        <p className="cofounding-content">
          Partner with experienced top-tier experts and operators to accelerate
          your startup and increase the odds of success.
        </p>
      </Row>

      {/* First Row */}
      <Row className="text-center my-5">
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/design-icon.png"
            width="50"
            height="50"
          />
          <p>Design</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/finance-icon.png"
            width="50"
            height="50"
          />
          <p>Finance</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/hr-icon.png"
            width="50"
            height="50"
          />
          <p>HR</p>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="text-center">
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/development-icon.png"
            width="50"
            height="50"
          />
          <p>Development</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/legal-icon.png"
            width="50"
            height="50"
          />
          <p>Legal</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/gradient-studio-icon/operations-icon.png"
            width="50"
            height="50"
          />
          <p>Operations</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CoFoundingTeam;

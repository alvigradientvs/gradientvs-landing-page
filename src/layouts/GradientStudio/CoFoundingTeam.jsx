import { Col, Image, Row } from "react-bootstrap";
import "./CoFoundingTeam.css";

function CoFoundingTeam() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <div className="co-founding-container">
      <Row className="text-center">
        <h2 className="superhuman-title mb-4">
          Your <span className="superhuman">superhuman</span> co-founding team
        </h2>
        <p className="cofounding-content">
          Partner with experienced top-tier experts and operators to accelerate
          your startup and increase the odds of success.
        </p>
      </Row>
      <Row className="text-center mt-5">
        <Col xs={6} md={4}>
          <Image
            src={`/assets/gradient-studio-icon/design-icon.png`}
            width="50"
            height="50"
          />
          <p>Design</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/assets/gradient-studio-icon/development-icon.png"
            width="50"
            height="50"
          />
          <p>Development</p>
        </Col>

        <Col xs={6} md={4}>
          <Image
            src={`/assets/gradient-studio-icon/finance-icon.png`}
            width="50"
            height="50"
          />
          <p>Finance</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/assets/gradient-studio-icon/legal-icon.png"
            width="50"
            height="50"
          />
          <p>Legal</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src={`/assets/gradient-studio-icon/finance-icon.png`}
            width="50"
            height="50"
          />
          <p>HR</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src={`/assets/gradient-studio-icon/operations-icon.png`}
            width="50"
            height="50"
          />
          <p>Operations</p>
        </Col>
      </Row>
    </div>
  );
}

export default CoFoundingTeam;

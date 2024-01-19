import { Button, Col, Row } from "react-bootstrap";
import "./FirstSection.css";

function FirstSection() {
  return (
    <Row
      className="justify-content-center align-items-center bg-dark text-white px-5"
      style={{
        height: "95vh",
        marginRight: 0,
      }}
    >
      <Col className="text-center">
        <h1 className="my-5">
          We <i>turn ideas</i> into thriving ventures
        </h1>
        <p>
          We engineer, launch, and scale disruptive high-growth start-ups
          together with entrepreneurs and corporations.
        </p>
        <Button className="mt-4 build-with-us-button">Build with us</Button>
      </Col>
    </Row>
  );
}

export default FirstSection;

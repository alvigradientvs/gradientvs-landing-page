import { Button, Col, Row } from "react-bootstrap";
import "./FirstSection.css";

function FirstSection({ formRef }) {
  const handleClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Row
      className="justify-content-center align-items-center bg-dark text-white px-5"
      style={{
        height: "95vh",
        marginRight: 0,
      }}
    >
      <Col className="text-center">
        <h1 className="my-5 mt-1 first-section-title">
          We <i>turn ideas</i> into thriving ventures
        </h1>
        <h5 className="mx-auto first-section-desc mb-5">
          We design, launch, and scale disruptive high-growth start-ups together
          with entrepreneurs and corporations.
        </h5>
        <Button onClick={handleClick} className="mt-4 build-with-us-button">
          Build with us
        </Button>
      </Col>
    </Row>
  );
}

export default FirstSection;

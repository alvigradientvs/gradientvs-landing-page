import { Col, Container, Row, Image } from "react-bootstrap";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <Container className="section-container">
      <Row className="text-center">
        <p>0-TO-1 IN 100 DAYS</p>
        <h4 className="what-we-do-title">What We Do</h4>
        <p className="what-we-do-content">
          We are a group of hands-on thinkers, dreamers, builders, and leaders
          who aim to make a positive impact in Southeast Asia through venture
          building.
        </p>
      </Row>
      <Row className="text-center py-5 my-5">
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/create-icon.gif"
            width="120"
            height="120"
          />
          <h5>
            <b>Create</b>
          </h5>
          <p>
            We explore problems, generate ideas, and conduct rigorous validation
            experiments to identify the largest, most important opportunities
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/launch-icon.gif"
            width="120"
            height="120"
            rounded
          />
          <h5>
            <b>Create</b>
          </h5>
          <p>
            We explore problems, generate ideas, and conduct rigorous validation
            experiments to identify the largest, most important opportunities
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="/src/assets/scale-icon.gif"
            width="120"
            height="120"
            rounded
          />
          <h5>
            <b>Create</b>
          </h5>
          <p>
            We explore problems, generate ideas, and conduct rigorous validation
            experiments to identify the largest, most important opportunities
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatWeDo;

import { Col, Image, Row } from "react-bootstrap";
import "./WhatWeDo.css";

function WhatWeDo() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <div className="margin-top-container gradient-studio-container">
      <Row className="text-center">
        <div className="section-text text-dark mb-4">0-TO-1 IN 100 DAYS</div>
        <h2 className="what-we-do-title">What We Do</h2>
        <div className="text-gray mb-5 mx-auto content-center">
          We are a group of hands-on thinkers, dreamers, builders, and leaders
          who aim to make a positive impact in Southeast Asia through venture
          building.
        </div>
      </Row>
      <div className="row-container">
        <Row className="text-center card-row">
          <Col xs={12} md={4} className="mt-4">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/create-icon.gif`}
              width="120"
              height="120"
            />
            <div className="icon-title">Create</div>
            <p className="text-muted">
              We explore problems, generate ideas, and conduct rigorous
              validation experiments to identify the largest, most important
              opportunities
            </p>
          </Col>
          <Col xs={12} md={4} className="mt-4">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/launch-icon.gif`}
              width="120"
              height="120"
              rounded
            />
            <div className="icon-title">Launch</div>
            <p className="text-muted">
              We partner with co-founders and corporations to launch and iterate
              towards product-market fit, alongside a pre-seed investment
            </p>
          </Col>
          <Col xs={12} md={4} className="mt-4">
            <Image
              src={`${NETLIFY_BASE_URL}/assets/scale-icon.gif`}
              width="120"
              height="120"
              rounded
            />
            <div className="icon-title">Scale</div>
            <p className="text-muted">
              We fuel startup growth through our expertise across important
              functions such as product development, hiring, fundraising, and
              operations
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default WhatWeDo;

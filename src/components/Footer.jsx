import { Col, Image, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <footer className="custom-footer row py-5">
      <Col className="pb-5">
        <a href="/">
          <Image
            src={`${NETLIFY_BASE_URL}/assets/gradient-labs.png`}
            width="235"
            height="60"
          />
        </a>
      </Col>

      <Col></Col>
      <Col></Col>
      <Col></Col>

      <Col>
        <h3>Pages</h3>
        <Nav className="flex-column">
          <Nav.Item className="mb-2">
            <Nav.Link href="#" className="nav-link p-0 text-white">
              Gradient Studio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mb-2">
            <Nav.Link href="#" className="nav-link p-0 text-white">
              Gradient Tech
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>

      <Col>
        <h3>Follow Us</h3>
        <Nav className="flex-column">
          <Nav.Item className="mb-2">
            <Nav.Link href="#" className="nav-link p-0 text-white">
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <div className="text-center mt-5 text-white">
        Copyright © 2023 Gradient Labs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

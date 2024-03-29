import { Col, Image, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <footer className="custom-footer row mx-0 py-5">
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

      <Col className="footer-section">
        <h3 className="pb-2">Pages</h3>
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

      <Col className="footer-section">
        <h3 className="pb-2">Follow Us</h3>
        <Nav className="flex-column">
          <Nav.Item className="mb-2">
            <Nav.Link href="#" className="nav-link p-0 text-white">
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>

      <div className="text-center mt-5 text-white">
        Copyright &copy; {new Date().getFullYear()} Gradient Labs. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;

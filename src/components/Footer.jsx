
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={4} className="footer-brand">
            <img src="/path-to-your-logo.png" alt="Gradient Labs Logo" className="footer-logo" />
          </Col>
          <Col xs={12} md={4} className="text-center footer-links">
            <a href="/studio" className="text-white mx-2">Gradient Studio</a>
            <a href="/tech" className="text-white mx-2">Gradient Tech</a>
          </Col>
          <Col xs={12} md={4} className="text-md-right footer-social">
            <a href="https://www.linkedin.com" className="text-white mx-2">Follow Us on LinkedIn</a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center py-3">
            <small className="text-white">
              Copyright © 2023 Gradient Labs. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

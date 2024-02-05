import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

import "./FirstSection.css";

function FirstSection() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="gradient-studio-background pt-4"
      >
        <div className="nav-studio-and-tech-contaner justify-content-between align-items-center w-100">
          <Navbar.Brand href="/" className="ms-3">
            <img
              src={`${NETLIFY_BASE_URL}/assets/gradient-labs.png`}
              width="183"
              height="53"
              className="align-center"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center text-white navlink">
              <Nav.Link
                className="text-white "
                href="/gradient-studio"
                target="_blank"
              >
                Gradient Studio
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="/gradient-tech"
                target="_blank"
              >
                Gradient Tech
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="row-container justify-content-start text-white gradient-studio-background gradient-studio-container">
        <Row className="gradient-studio-first-section">
          <div className="gradient-studio-text">GRADIENT STUDIO</div>
          <h1 className="gradient-studio-content">
            We collaborate with entrepreneurs and corporations to create,
            launch, and expand disruptive high-growth startups.
          </h1>
          <div className="partner-with-us text-white">
            Partner With Us <ArrowRight />
          </div>
        </Row>
      </div>
    </>
  );
}

export default FirstSection;

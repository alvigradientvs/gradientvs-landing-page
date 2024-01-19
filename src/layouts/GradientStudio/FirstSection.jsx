import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./FirstSection.css";
import { Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

function FirstSection() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="gradient-studio-background pt-4"
      >
        <Container>
          <Navbar.Brand href="/" className="ms-5">
            <img
              src="/src/assets/gradient-labs.png"
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
        </Container>
      </Navbar>
      <Container
        className="p-5 gradient-studio-background first-section-container"
        fluid
      >
        <Row className="m-5 px-5 text-white">
          <p className="gradient-studio-title">GRADIENT STUDIO</p>
          <h1 className="gradient-studio-content">
            We collaborate with entrepreneurs and corporations to create,
            launch, and expand disruptive high-growth startups.
          </h1>
          <h6 className="partner-with-us">
            Partner With Us <ArrowRight />
          </h6>
        </Row>
      </Container>
    </>
  );
}

export default FirstSection;

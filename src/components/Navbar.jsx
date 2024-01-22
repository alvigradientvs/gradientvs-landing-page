import { Nav, Navbar } from "react-bootstrap";

function GradientNav() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      bg="dark"
      className="navbar navbar-dark px-sm-4 px-lg-auto pt-3"
    >
      <div className="nav-container justify-content-between align-items-center w-100">
        <Navbar.Brand href="/" className="ms-4 ms-lg-5">
          <img
            src={`${NETLIFY_BASE_URL}/assets/gradient-innovation.png`}
            width="235"
            height="60"
            className="align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="me-4 me-lg-5">
          <Nav className="ms-auto text-center ml-auto">
            <Nav.Link href="/" target="_blank">
              Gradient Studio
            </Nav.Link>
            <Nav.Link href="/" target="_blank">
              Gradient Tech
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default GradientNav;

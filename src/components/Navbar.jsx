import { Nav, Navbar } from "react-bootstrap";

function GradientNav() {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      bg="dark"
      className="navbar navbar-dark px-sm-4 px-lg-auto"
    >
      <Navbar.Brand href="/" className="ms-4 ms-lg-5">
        <img
          src="/src/assets/gradient-innovation.png"
          width="162"
          height="43"
          className="align-center"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="me-4 me-lg-5">
        <Nav className="ms-auto text-center">
          <Nav.Link href="/" target="_blank">
            Gradient Studio
          </Nav.Link>
          <Nav.Link href="/" target="_blank">
            Gradient Tech
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GradientNav;

{
  /* <Navbar
collapseOnSelect
expand="lg"
bg="dark"
className="navbar navbar-dark"
>
<Container>
  <Navbar.Brand href="/" className="ms-5">
    <img
      src="/src/assets/gradient-innovation.png"
      width="236"
      height="60"
      className="align-center"
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto text-center">
      <Nav.Link href="/gradient-studio" target="_blank">
        Gradient Studio
      </Nav.Link>
      <Nav.Link href="/gradient-tech" target="_blank">
        Gradient Tech
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}

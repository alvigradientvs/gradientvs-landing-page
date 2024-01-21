import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Partnership.css";

function Partnership() {
  const NETLIFY_BASE_URL = import.meta.env.VITE_NETLIFY_BASE_URL;

  return (
    <div className="justify-content-center text-white bg-dark py-5 partnership-container">
      <Row>
        <Col className="text-center">
          <h2 className="partnership-text">PARTNERSHIP</h2>
          <h3 className="partnership-description-text">
            Find out how we can help you
          </h3>
        </Col>
      </Row>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={5}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Img
                  src={`${NETLIFY_BASE_URL}/assets/gradient-studio-logo.png`}
                  width="300"
                  height="68"
                  className="object-fit-contain"
                />
                <Card.Text>
                  Gradient Studio comprises highly-skilled venture building team
                  that specializes in turning visions into disruptive
                  businesses. We achieve this by implementing our rigorous,
                  well-developed venture playbook, which guides every step of
                  the process, from ideation to execution.
                </Card.Text>
                <Button
                  className="build-with-us-button"
                  variant="dark"
                  size="sm"
                >
                  More about Studio
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={5}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Img
                  src={`${NETLIFY_BASE_URL}/assets/gradient-tech-logo.png`}
                  width="300"
                  height="68"
                  className="object-fit-contain"
                />
                <Card.Text>
                  At Gradient Tech, we&apos;re passionate about technology and
                  committed to helping organizations of any size to turn their
                  digital ideas into reality. With our expertise and innovative
                  software development capabilities, we deliver exceptional
                  solutions that cater to the unique needs of our clients.
                </Card.Text>
                <Button
                  className="build-with-us-button"
                  variant="dark"
                  size="sm"
                >
                  More about Studio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partnership;

{
  /* <Container fluid className="px-0">
<Row className="justify-content-center text-white bg-dark py-5">
  <Col className="text-center">
    <h2 className="partnership-text">PARTNERSHIP</h2>
    <h3 className="partnership-description-text">
      Find out how we can help you
    </h3>
  </Col>
</Row> */
}

{
  /* Gradient Studio and Tech */
}
{
  /* <Row
  className="justify-content-center text-center text-white bg-dark p-5"
  style={{
    height: "95vh",
  }}
>
  <Col md={5}>
    <Card className="bg-dark text-white border-0">
      <Card.Body>
        <Card.Title>
          <img
            src="/src/assets/gradient-studio-logo.png"
            width="325"
            height="73"
          />
        </Card.Title>
        <Card.Text className="px-5 mx-5">
          Gradient Studio comprises highly-skilled venture building team
          that specializes in turning visions into disruptive businesses.
          We achieve this by implementing our rigorous, well-developed
          venture playbook, which guides every step of the process, from
          ideation to execution.
        </Card.Text>
        <Button className="build-with-us-button" variant="dark" size="sm">
          More about Studio
        </Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={5}>
    <Card className="bg-dark text-white border-0">
      <Card.Body>
        <Card.Title>
          {" "}
          <img
            src="/src/assets/gradient-tech-logo.png"
            width="325"
            height="73"
          />
        </Card.Title>
        <Card.Text className="px-5 mx-5">
          At Gradient Tech, we&apos;re passionate about technology and
          committed to helping organizations of any size to turn their
          digital ideas into reality. With our expertise and innovative
          software development capabilities, we deliver exceptional
          solutions that cater to the unique needs of our clients.
        </Card.Text>
        <Button className="build-with-us-button" variant="dark" size="sm">
          More about Tech
        </Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>  */
}

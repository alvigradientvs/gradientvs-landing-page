import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Partnership.css";

function Partnership() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <div className="justify-content-center text-white bg-dark py-5">
      <Row>
        <Col className="text-center">
          <h2 className="section-text">PARTNERSHIP</h2>
          <h2 className="partnership-description-text mb-5">
            Find out how we can help you
          </h2>
        </Col>
      </Row>
      <div className="row-container">
        <Row className="d-flex justify-content-center partnership-row text-center">
          <Col sm={12} md={5}>
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Img
                  src={`${NETLIFY_BASE_URL}/assets/gradient-studio-logo.png`}
                  className="object-fit-contain my-4 partnership-image"
                />
                <Card.Text className="partnership-card-text">
                  Gradient Studio comprises highly-skilled venture building team
                  that specializes in turning visions into disruptive
                  businesses. We achieve this by implementing our rigorous,
                  well-developed venture playbook, which guides every step of
                  the process, from ideation to execution.
                </Card.Text>
                <Button
                  className="more-about-partnership"
                  variant="dark"
                  size="sm"
                >
                  More about Studio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={5} className="gradient-tech">
            <Card className="bg-dark text-white border-0">
              <Card.Body>
                <Card.Img
                  src={`${NETLIFY_BASE_URL}/assets/gradient-tech-logo.png`}
                  width="300"
                  height="68"
                  className="object-fit-contain my-4"
                />
                <Card.Text className="partnership-card-text">
                  At Gradient Tech, we&apos;re passionate about technology and
                  committed to helping organizations of any size to turn their
                  digital ideas into reality. With our expertise and innovative
                  software development capabilities, we deliver exceptional
                  solutions that cater to the unique needs of our clients.
                </Card.Text>
                <Button
                  className="more-about-partnership"
                  variant="dark"
                  size="sm"
                >
                  More about Tech
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Partnership;

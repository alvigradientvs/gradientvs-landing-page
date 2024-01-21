import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import "./Projects.css";

function Projects() {
  const NETLIFY_BASE_URL = import.meta.env.VITE_NETLIFY_BASE_URL;
  const projects = [
    {
      title: "Home-based F&B Marketplace and Business Management Platform",
      description:
        "We enable home-based F&B entrepreneurs to grow their business and reach new customers without letting paperwork, order management, and invoicing get in the way.",
      imageAlt: "Home-based F&B app screenshot",
      imageSrc: "03",
    },
    {
      title: "B2B Marketplace & Order Management System",
      description:
        "We make it simple for users to manage all aspects of their omni-channel business and seamlessly sell their products online.",
      imageAlt: "B2B Marketplace app screenshot",
      imageSrc: "02",
    },
    {
      title: "SME Business Discovery and Acquisition Platform",
      description:
        "We make it easy for small business owners to explore acquisitions, and for aspiring entrepreneurs to jumpstart their business ownership journey.",
      imageAlt: "SME Business platform screenshot",
      imageSrc: "03",
    },
  ];

  return (
    <div className="projects py-5 my-5 text-center">
      <Row className="mb-4">
        <Col>
          <div className="projects-text mb-2">PROJECTS</div>
          <div className="projects-description-text mb-3">Case Study</div>
          <div className="projects-content-text mb-5">
            Gain insights into our expertise in building and resolving intricate
            business problems through the strategic application of technology
            and our venture playbook methodology.
          </div>
        </Col>
      </Row>
      <div className="row-container">
        <Row className="card-row">
          {projects.map((projectNumber, index) => (
            <Col md={4} sm={12} className="mb-4" key={index}>
              <Card className="border-0 card">
                <Card.Img
                  variant="top"
                  src={`${NETLIFY_BASE_URL}/assets/project${projectNumber.imageSrc}.png`}
                  width="50px"
                  height="50px"
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title className="my-4">
                    {projectNumber.title}
                  </Card.Title>
                  <Card.Text className="my-4">
                    Project description {projectNumber.description} will go
                    here. Replace with actual content.
                  </Card.Text>
                  <Button
                    variant="link"
                    href="#"
                    className="learn-more justify-content-start"
                  >
                    Learn more <ArrowRight color="#6B6B6B" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Projects;

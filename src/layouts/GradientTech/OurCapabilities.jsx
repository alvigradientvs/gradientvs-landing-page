import { Col, Row } from "react-bootstrap";
import "./OurCapabilities.css";
import SmallCard from "../../components/SmallCard";

function OurCapabilities() {
  return (
    <div className="text-white gradient-tech-background gradient-tech-container our-capabilities-container">
      <Row className="text-center">
        <div className="section-text text-white mb-4">OUR CAPABILITIES</div>
        <h2 className="what-we-do-title text-white">How We Work</h2>
        <p className="mb-5 mx-auto content-center">
          We start the company building process from scratch by identifying
          opportunities, rigorously testing assumptions, and creating products
        </p>
      </Row>
      <Row className="row-card-container">
        <Col>
          <div className="building-process-title text-center">Ideation</div>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/user-research.png"
              title="User Research"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/business-analysis.png"
              title="Business Analysis"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/market-research.png"
              title="Market Research"
            />
          </Row>
        </Col>

        <Col>
          <div className="building-process-title text-center">Design</div>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/ui-ux.png"
              title="UI/UX Design"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/wireframing.png"
              title="Wireframing"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/business-model.png"
              title="Business Model"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/tech-architecture.png"
              title="Tech Architecture"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/mvp.png"
              title="MVP"
            />
          </Row>
        </Col>

        <Col>
          <div className="building-process-title text-center">Build</div>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/mobile-app-development.png"
              title="Mobile App Development"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/web-development.png"
              title="Web Development"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/smart-contracts.png"
              title="Smart Contracts"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/blockchain-development.png"
              title="Blockchain Development"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/ai-ml-development.png"
              title="AI/ML Development"
            />
          </Row>
        </Col>

        <Col>
          <div className="building-process-title text-center">Launch</div>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/cloud-and-devops.png"
              title="Cloud & DevOps"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/ci-cd.png"
              title="CI/CD"
            />
          </Row>
          <Row className="capabilities-single-card">
            <SmallCard
              iconSrc="/public/assets/gradient-tech-icon/how-we-work/seo.png"
              title="SEO"
            />
          </Row>
        </Col>
      </Row>
    </div>
    // <Container
    //   fluid
    //   className="justify-content-center mt-5 our-capabilities-container"
    // >
    //   <Row className="text-center text-white pt-5">
    //     <p>OUR CAPABILITIES</p>
    //     <h1 className="how-we-work-title">How We Work</h1>
    //     <p className="our-capabilities-description">
    //       We start the company building process from scratch by identifying
    //       opportunities, rigorously testing assumptions, and creating products
    //     </p>
    //   </Row>
    // </Container>
  );
}

export default OurCapabilities;

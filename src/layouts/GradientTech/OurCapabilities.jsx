import { Col, Row } from "react-bootstrap";
import "./OurCapabilities.css";
import SmallCard from "../../components/SmallCard";

const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";
const sections = [
  {
    title: "Ideation",
    cards: [
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/user-research.png`,
        title: "User Research",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/business-analysis.png`,
        title: "Business Analysis",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/market-research.png`,
        title: "Market Research",
      },
    ],
  },
  {
    title: "Design",
    cards: [
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/ui-ux.png`,
        title: "UI/UX Design",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/wireframing.png`,
        title: "Wireframing",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/business-model.png`,
        title: "Business Model",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/tech-architecture.png`,
        title: "Tech Architecture",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/mvp.png`,
        title: "MVP",
      },
    ],
  },
  {
    title: "Build",
    cards: [
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/mobile-app-development.png`,
        title: "Mobile App Development",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/web-development.png`,
        title: "Web Development",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/smart-contracts.png`,
        title: "Smart Contracts",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/blockchain-development.png`,
        title: "Blockchain Development",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/ai-ml-development.png`,
        title: "AI/ML Development",
      },
    ],
  },
  {
    title: "Launch",
    cards: [
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/cloud-and-devops.png`,
        title: "Cloud & DevOps",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/ci-cd.png`,
        title: "CI/CD",
      },
      {
        iconSrc: `${NETLIFY_BASE_URL}/assets/gradient-tech-icon/how-we-work/seo.png`,
        title: "SEO",
      },
    ],
  },
];

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
        {sections.map((section, index) => (
          <Col key={index}>
            <div className="building-process-title text-center">
              {section.title}
            </div>
            {section.cards.map((card, cardIndex) => (
              <Row key={cardIndex} className="capabilities-single-card">
                <SmallCard iconSrc={card.iconSrc} title={card.title} />
              </Row>
            ))}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurCapabilities;

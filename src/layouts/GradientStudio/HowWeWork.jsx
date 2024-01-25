import { Image, Row } from "react-bootstrap";
import "./HowWeWork.css";

function HowWeWork() {
  const NETLIFY_BASE_URL = "https://reliable-raindrop-c9f108.netlify.app/";

  return (
    <div className="gradient-studio-background margin-top-container full-height">
      <Row className="text-center text-white">
        <p className="section-text text-white venture-building-playbook">
          VENTURE-BUILDING PLAYBOOK
        </p>
        <h2 className="how-we-work-title text-white">How We Work</h2>
        <div className="text-gray text-white mb-5 mx-auto content-center">
          We start the company building process from scratch by identifying
          opportunities, rigorously testing assumptions, and creating products
        </div>
      </Row>

      <div className="row-container">
        <Row>
          <Image src={`/assets/agile-scrum.png`} />
        </Row>
      </div>
    </div>
  );
}

export default HowWeWork;

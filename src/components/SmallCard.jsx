import { Image } from "react-bootstrap";
import "./SmallCard.css";

function SmallCard({ iconSrc, title }) {
  return (
    <div className="small-card-container d-flex mb-2">
      <Image src={iconSrc} className="small-card-icon" alt="icon-logo" />
      <span className="small-card-title text-dark ms-2">{title}</span>
    </div>
  );
}

export default SmallCard;

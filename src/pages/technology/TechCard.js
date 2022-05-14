import "./TechCard.css";

const TechCard = ({techChoice}) => {
  const {name, description} = techChoice;

  return (
    <div className="crew_card_container">
      <div className="tech_card_container">
        <h2>THE TERMINOLOGY ... </h2>
        <h1>{name.toUpperCase()}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TechCard;

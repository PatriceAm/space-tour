import "./DestCard.css";

const DestCard = ({dest}) => {
  let title = dest.name;
  title = title.toUpperCase();

  return (
    <div className="card">
      <p className="cardTitle">{title}</p>
      <div className="card_description_container">
        <p className="cardDescription">{dest.description}</p>
      </div>
      <div className="cardLine"></div>
      <div className="cardLower">
        <div>
          <p>AVG. DISTANCE</p>
          <h3>{dest.distance}</h3>
        </div>
        <div>
          <p>EST.TRAVEL TIME</p>
          <h3>{dest.travel}</h3>
        </div>
      </div>
    </div>
  );
};

export default DestCard;

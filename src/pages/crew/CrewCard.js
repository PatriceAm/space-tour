import "./CrewCard.css";

const CrewCard = ({crewMember}) => {
  const {role, name, bio} = crewMember;

  return (
    <div className="crew_card_container">
      <h2>{role.toUpperCase()}</h2>
      <div className="crew_card_name">
        <h1>{name.toUpperCase()}</h1>
      </div>
      <div className="crew_card_bio">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CrewCard;

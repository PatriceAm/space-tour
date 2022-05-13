import "./Bullets.css";

const Bullets = ({setTech, ini}) => {
  return (
    <div className="bullets_container">
      <button
        onClick={() => setTech(0)}
        style={ini ? {backgroundColor: "white", color: "black"} : null}
      >
        1
      </button>
      <button onClick={() => setTech(1)}>2</button>
      <button onClick={() => setTech(2)}>3</button>
    </div>
  );
};

export default Bullets;

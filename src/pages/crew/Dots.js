import "./Dots.css";

const Dots = ({setCrew, ini}) => {
  return (
    <div className="dots_container">
      <button
        name="cr"
        className="active"
        onClick={() => setCrew(0)}
        style={ini ? {backgroundColor: "white", color: "black"} : null}
      />
      <button name="cr" className="active" onClick={() => setCrew(1)} />
      <button name="cr" className="active" onClick={() => setCrew(2)} />
      <button name="cr" className="active" onClick={() => setCrew(3)} />
    </div>
  );
};

export default Dots;

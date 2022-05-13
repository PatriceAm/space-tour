import "./DestNav.css";

const DestNav = ({manyDest, selectNew, ini}) => {
  return (
    <div className="dest_nav_container">
      {manyDest.map((de) => (
        <button
          onClick={() => selectNew(de)}
          key={de}
          style={
            ini === de
              ? {
                  borderBottom: "2px solid grey",
                  borderTop: "2px solid transparent",
                }
              : null
          }
        >
          {de.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default DestNav;

import satData from "./satData";
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  const filteredButtons = () => {
    return (
      <div>
        {displaySats.map((sat, id) => {
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        })}
      </div>
    )}

  return (
    <div className="flex-container">
      {filteredButtons}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
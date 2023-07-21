import satData from "./satData";
import App from "../App";
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  const filteredButtons = () => {
    {displaySats.map((sat, id) => {
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
  })}
}

  return (
    <div className="flex-container">
      {filteredButtons}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
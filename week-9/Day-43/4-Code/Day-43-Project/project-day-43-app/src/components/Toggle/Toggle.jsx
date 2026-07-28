import { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const wordColor = isOpen ? "green" : "red";

  function toggleIt() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="toggle-container ">
      <h2>Toggle Me</h2>
      <h3 className={wordColor}>{isOpen ? "OPEN" : "CLOSED"}</h3>
      <button type="button" className="toggle-btn" onClick={toggleIt}>
        {isOpen ? "Close It" : "Open It"}
      </button>
    </div>
  );
};

export default Toggle;

// ================================
// IMPORTS (styles for this component)
// ================================
import './Button.css';

function Button() {

  // ================================
  // BUTTON TEXT (UI label)
  // Stored as a variable so it can be easily changed later
  // ================================
  const buttonText = "Click Me!!";

  // ================================
  // EVENT HANDLER (onClick logic)
  // Runs when the button is clicked
  // ================================
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (

    // ================================
    // BUTTON UI ELEMENT
    // ================================
    <button
      className="btn"
      onClick={handleClick} // attaches click event
    >

      {/* BUTTON LABEL (dynamic text) */}
      {buttonText}

    </button>
  );
}

export default Button;
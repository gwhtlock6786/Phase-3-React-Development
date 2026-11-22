import "./TipCalculator.css";

const TipCalculator = ({ selectedTip, onTipChange }) => {
  const tipOptions = [15, 18, 20];

  return (
    <section className="tip-calculator">
      <h3>Add a Tip</h3>

      <p>Choose a tip percentage for your order.</p>

      <div className="tip-options">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            type="button"
            className={selectedTip === tip ? "tip-option active" : "tip-option"}
            onClick={() => onTipChange(tip)}
            aria-pressed={selectedTip === tip}
          >
            {tip}%
          </button>
        ))}
      </div>
    </section>
  );
};

export default TipCalculator;

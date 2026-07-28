import { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const isNoFeedback = feedback.length === 0;
  const isShortFeedback = feedback.length < 10 && feedback.length > 0;

  const isMediumFeedback = feedback.length >= 10 && feedback.length <= 50;

  const isLongFeedback = feedback.length > 50;

  function handleUpdate(event) {
    setFeedback(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  }

  return (
    <section id="feedbackSection">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Feedback: </label>
        <textarea
          name="feedback"
          id="feedback"
          value={feedback}
          onChange={handleUpdate}
          placeholder="Tell us what you think..."
        />
        <button type="submit" id="feedback-btn" disabled={isNoFeedback}>
          Jump into the Abyss
        </button>
      </form>

      <p>Character length: {feedback.length}</p>
      {isNoFeedback && <p>Please enter your feedback.</p>}
      {isShortFeedback && (
        <p className="short-message">Please provide a little more detail.</p>
      )}

      {isMediumFeedback && (
        <p className="medium-message">
          Great! That's a good amount of feedback.
        </p>
      )}

      {isLongFeedback && (
        <p className="long-message">Thank you for your detailed feedback!</p>
      )}
    </section>
  );
};

export default FeedbackForm;

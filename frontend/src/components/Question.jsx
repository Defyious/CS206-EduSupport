import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Question.css";

const Question = () => {
  const navigate = useNavigate();

  const onButtonFullContainerClick = useCallback(() => {
    navigate("/desktop-mentor-free-matching");
  }, [navigate]);

  return (
    <div className="add-your-question-button">
      <div className="title-category-frame">
        <div className="add-your-question-parent">
          <h1 className="add-your-question">Add Your Question</h1>
          <div className="you-can-ask">You can ask anything!</div>
        </div>
      </div>
      <div className="trendings-container">
        <div className="question-categories-frame">
          <div className="title">Title</div>
        </div>
        <div className="question-categories-frame1">
          <div className="category">Category</div>
        </div>
        <div className="question-categories-frame2">
          <div className="ask-what-you">Ask what you want to clarify.</div>
        </div>
      </div>
      {/* Use a button element for better semantics and accessibility */}
      <button className="button-full" onClick={onButtonFullContainerClick} aria-label="Add your question">
        <div className="go-to-threads">Add Question</div>
      </button>
    </div>
  );
};

export default Question;

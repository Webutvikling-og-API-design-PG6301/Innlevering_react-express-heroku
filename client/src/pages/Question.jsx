import React, { useState } from "react";
import { useNavigate } from "react-router";
import { randomQuestion, isCorrectAnswer } from "../components/questions";
const Question = ({ setIsRightAnswer, setIsAnsweredQuestion }) => {
  const [question, setQuestion] = useState(randomQuestion());
  const navigate = useNavigate();
  const handleRightAnswer = (answer) => {
    if (isCorrectAnswer(question, answer)) {
      console.log("right answer");
      setIsRightAnswer((prev) => prev + 1);
      setIsAnsweredQuestion((prev) => prev + 1);
      navigate("/answer/correct");
    } else {
      console.log("Wrong answer");
      setIsAnsweredQuestion((prev) => prev + 1);
      navigate("/answer/wrong");
    }
  };
  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((answer) => question.answers[answer])
        .map((value) => {
          return (
            <div key={value} data-testid={value}>
              <button onClick={() => handleRightAnswer(value)}>
                {question.answers[value]}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Question;

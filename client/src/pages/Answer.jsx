import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
const Answer = ({ isRightAnswer, isAnsweredQuestion }) => {
  return (
    <div>
      <Routes>
        <Route path={"correct"} element={<h1>Correct!</h1>} />
        <Route path={"wrong"} element={<h1>Wrong!</h1>} />
      </Routes>

      <h2>
        Your score is {isRightAnswer} / {isAnsweredQuestion}
      </h2>
      <Link to="/">
        <button>Return to home</button>
      </Link>
      <Link to="/question">
        <button>New quiz</button>
      </Link>
    </div>
  );
};

export default Answer;

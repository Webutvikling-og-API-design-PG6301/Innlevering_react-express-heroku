import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Answer from "./pages/Answer";

// pages for routing
import Home from "./pages/Home";
import Question from "./pages/Question";

const App = () => {
  const [isRightAnswer, setIsRightAnswer] = useState(0);
  const [isAnsweredQuestion, setIsAnsweredQuestion] = useState(0);
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/question"}
          element={
            <Question
              setIsRightAnswer={setIsRightAnswer}
              setIsAnsweredQuestion={setIsAnsweredQuestion}
            />
          }
        />
        <Route
          path={"/answer/*"}
          element={
            <Answer
              isRightAnswer={isRightAnswer}
              isAnsweredQuestion={isAnsweredQuestion}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

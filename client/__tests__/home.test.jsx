import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import Question from "../src/pages/Question";
import Home from "../src/pages/Home";
import { QuestionContext } from "../src/pages/Question";
import { Simulate } from "react-dom/test-utils";

const question = {
  question: "Are you happy?",
  answers: {
    answer_a: "Yes",
    answer_b: "No",
    answer_c: "Maybe",
  },
  correct_answers: {
    answer_a_correct: "true",
    answer_b_correct: "false",
    answer_c_correct: "false",
  },
};

describe("Quiz application", () => {
  it("should show home component", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("should simulate correct answer", () => {
    const setIsAnsweredQuestion = jest.fn();
    const setIsRightAnswer = jest.fn();

    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/question"]}>
        <QuestionContext.Provider value={{ randomQuestion: () => question }}>
          <Question
            setIsRightAnswer={setIsRightAnswer}
            setIsAnsweredQuestion={setIsAnsweredQuestion}
          />
        </QuestionContext.Provider>
      </MemoryRouter>,
      element
    );

    Simulate.click(element.querySelector("[data-testid=answer_a] button"));
    expect(setIsAnsweredQuestion).toBeCalled();
    expect(setIsRightAnswer).toBeCalled();
    expect(element.innerHTML).toMatchSnapshot();
  });
});

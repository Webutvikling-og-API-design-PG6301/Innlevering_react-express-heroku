import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/pages/Home";
import { MemoryRouter } from "react-router-dom";
import Question from "../src/pages/Question";
import { Simulate } from "react-dom/test-utils";

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
    const element = document.createElement("div");
    const mockFunction = jest.fn();
    ReactDOM.render(
      <MemoryRouter>
        <Question setIsRightAnswer={mockFunction} />
      </MemoryRouter>,
      element
    );

    Simulate.click(element.querySelector("[data-testid=answer_b]"));
  });
});

import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Answer from "../src/pages/Answer";
import Home from "../src/pages/Home";

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

  it("should show answers", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Answer isRightAnswer={3} isAnsweredQuestion={5} />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});

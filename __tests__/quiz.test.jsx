import React from "react";
import ReactDOM from "react-dom";
import Test from "../client/src/pages/Test";
import Home from "../client/src/pages/Home";

describe("test", () => {
  it("should test test", () => {
    const element = document.createElement("div");
    ReactDOM.render(<Test />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});

import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/pages/Home";

describe("show home", () => {
  it("snapshot home component", () => {
    const element = document.createElement("div");
    ReactDOM.render(<Home />, element);
  });
});

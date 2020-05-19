import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

it("renders a form", () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId("form");
  expect(linkElement).toBeInTheDocument();
});

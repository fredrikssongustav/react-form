import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

it("we can input things to the fields", () => {
  const { getByTestId } = render(<App />);
  const field = getByTestId("first-name-input");

  fireEvent.input(field, { target: { value: "Fredrik" } });

  expect((field as any).value).toBe("Fredrik");
});

it("renders a form", () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId("form");
  expect(form).toBeInTheDocument();
});

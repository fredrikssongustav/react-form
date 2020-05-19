import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

it("we see a modal if we've submitted correct data", () => {
  const { getByTestId } = render(<App />);

  fireEvent.input(getByTestId("first-name-input"), {
    target: { value: "Fredrik" },
  });
  fireEvent.input(getByTestId("last-name-input"), {
    target: { value: "Gustavsson" },
  });
  fireEvent.input(getByTestId("age-input"), {
    target: { value: "42" },
  });

  expect(getByTestId("modal")).toBeInTheDocument();
});

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

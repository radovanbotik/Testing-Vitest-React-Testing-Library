import { test, it } from "vitest";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);
  //find an elemenent with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  //expect the background color to be red
  // expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  expect(colorButton).toHaveClass("bg-red-500");
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  //expect bg to be red
  expect(colorButton).toHaveClass("bg-red-500");
  //clicking button
  fireEvent.click(colorButton);
  //expect the background to be blue
  expect(colorButton).toHaveClass("bg-blue-500");

  //expect the button text to be 'change to red'
  expect(colorButton).toHaveTextContent(/change to red/i);
});

test("initial conditions", () => {
  render(<App />);
  //check that the button starts out enabled
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button disabled upon checkbox checking", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

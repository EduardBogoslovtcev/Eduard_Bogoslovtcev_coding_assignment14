import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toHaveStyle("background-color: #cccccc");
  });
});

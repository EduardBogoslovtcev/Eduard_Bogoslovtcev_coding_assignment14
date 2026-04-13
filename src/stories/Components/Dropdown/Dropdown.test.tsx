import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

describe("Dropdown Component", () => {
  test("renders dropdown and is visible", () => {
    render(<Dropdown options={["One", "Two"]} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(<Dropdown options={["One"]} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveStyle("background-color: #eeeeee");
  });
});

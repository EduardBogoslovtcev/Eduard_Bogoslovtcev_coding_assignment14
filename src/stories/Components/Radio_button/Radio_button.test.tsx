import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./Radio_button";

describe("RadioButton Component", () => {
  test("renders radio button and is visible", () => {
    render(<RadioButton label="Test Option" name="group" value="test" />);

    const radio = screen.getByRole("radio");
    expect(radio).toBeVisible();
  });

  test("changes appearance when disabled", () => {
    render(
      <RadioButton
        label="Disabled Option"
        name="group"
        value="disabled"
        disabled
      />,
    );

    const radio = screen.getByRole("radio");
    expect(radio).toBeDisabled();
  });
});

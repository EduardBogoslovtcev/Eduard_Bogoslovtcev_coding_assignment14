import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./Hero_Image";

describe("HeroImage Component", () => {
  test("renders hero title and is visible", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/800x400"
        title="Hero Title"
      />,
    );

    const title = screen.getByText("Hero Title");
    expect(title).toBeVisible();
  });

  test("applies disabled filter style", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/800x400"
        title="Disabled Hero"
        disabled
      />,
    );

    const title = screen.getByText("Disabled Hero");
    const wrapper = title.parentElement;
    expect(wrapper).toHaveStyle("filter: grayscale(100%)");
  });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders image and is visible", () => {
    render(
      <Img
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
        alt="Test Image"
      />,
    );

    const image = screen.getByAltText("Test Image");
    expect(image).toBeVisible();
  });

  test("applies disabled styles", () => {
    render(
      <Img
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
        alt="Disabled Image"
        disabled
      />,
    );

    const image = screen.getByAltText("Disabled Image");
    expect(image).toHaveStyle("filter: grayscale(100%)");
  });
});

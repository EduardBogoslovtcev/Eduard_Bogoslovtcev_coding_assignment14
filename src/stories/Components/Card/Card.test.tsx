import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  test("renders title and description", () => {
    render(<Card title="Test Card" description="Card description" />);

    expect(screen.getByText("Test Card")).toBeVisible();
    expect(screen.getByText("Card description")).toBeVisible();
  });

  test("renders image when provided", () => {
    render(
      <Card
        title="Card"
        description="Desc"
        image="https://via.placeholder.com/300"
      />,
    );

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});

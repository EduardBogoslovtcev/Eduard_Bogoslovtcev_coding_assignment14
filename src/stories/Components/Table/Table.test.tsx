import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

describe("Table Component", () => {
  test("renders table and is visible", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>,
    );
    const cell = screen.getByText("Test");
    expect(cell).toBeVisible();
  });

  test("background color changes when disabled", () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Disabled</td>
          </tr>
        </tbody>
      </Table>,
    );
    const table = screen.getByRole("table");
    expect(table).toHaveStyle("background-color: #eeeeee");
  });
});

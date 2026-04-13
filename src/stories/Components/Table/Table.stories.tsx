import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";
import { TableHeader } from "./Table_header";
import { TableRow } from "./Table_row";
import { TableCell } from "./Table_cell";
import { TableFooter } from "./Table_footer";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: {},
    disabled: true,
  },

  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1</TableCell>
          <TableCell>Data 1</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Table disabled>
      <TableHeader disabled>
        <TableRow disabled>
          <TableCell disabled>Header</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  ),
};

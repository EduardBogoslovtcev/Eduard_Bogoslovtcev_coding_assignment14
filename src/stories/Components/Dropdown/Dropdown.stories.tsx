import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: ["Option 1", "Option 2"],
    disabled: true,
  },
};

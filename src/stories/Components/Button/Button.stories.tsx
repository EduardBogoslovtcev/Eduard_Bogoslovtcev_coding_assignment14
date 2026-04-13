import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me",
    backgroundColor: "#007bff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    backgroundColor: "#007bff",
    disabled: true,
  },
};

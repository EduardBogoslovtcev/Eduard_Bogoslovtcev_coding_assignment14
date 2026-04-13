import { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { RadioButton } from "./Radio_button";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Option 1",
    name: "example",
    value: "option1",
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    name: "example",
    value: "disabled",
    disabled: true,
  },
};

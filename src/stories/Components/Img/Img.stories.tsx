import { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { Img } from "./Img";

const meta = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
    alt: "Sample Image",
    width: "300px",
    height: "200px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
    alt: "Disabled Image",
    disabled: true,
  },
};

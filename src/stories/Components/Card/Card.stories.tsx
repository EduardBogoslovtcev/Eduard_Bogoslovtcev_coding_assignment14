import { Meta, StoryObj } from "@storybook/react-webpack5";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a simple card component.",
    image:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Text Only Card",
    description: "This card does not have an image.",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    description: "This card is disabled.",
    image:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
    disabled: true,
  },
};

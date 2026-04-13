import { Meta, StoryObj } from "@storybook/react-webpack5";

import { HeroImage } from "./Hero_Image";

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof HeroImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/1200x600",
    title: "Welcome to Our Website",
    height: "400px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/1200x600",
    title: "Disabled Hero",
    disabled: true,
  },
};

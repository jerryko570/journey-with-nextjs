import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    img: { control: "text" },
    address: { control: "text" },
    hourlyPay: { control: "number" },
    size: { constrol: "sm/ md / lg" },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "jerry's coffee",
    img: "",
    address: "경기도 남양주 수동면",
    hourlyPay: 17000,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          margin: "0 auto",
          maxWidth: "90%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

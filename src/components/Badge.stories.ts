import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  argTypes: {
    label: {
      control: "text",
      defaultValue: "뱃지",
    },
    status: {
      control: "radio",
      options: ["success", "pending", "reject"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "뱃지",
    status: "success",
  },
  parameters: {
    layout: "centered",
  },
};

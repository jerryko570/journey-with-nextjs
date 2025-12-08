import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes: {
    status: { control: "radio", options: ["default", "disabled"] },
    placeholder: { control: "text", defaultValue: "item을 선택하세요" },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    status: "default",
    placeholder: "item을 선택하세요",
  },
  parameters: {
    layout: "centered",
  },
};

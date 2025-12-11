import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes: {
    status: {
      control: "radio",
      options: ["default", "disabled"],
    },
    placeholder: {
      control: "text",
      defaultValue: "지역을 선택하세요",
    },

    items: {
      control: "object",
      defaultValue: ["서울", "경기도", "부산"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    status: "default",
    placeholder: "지역을 선택하세요",
    items: ["서울", "경기도", "부산"],
  },
  parameters: {
    layout: "centered",
  },
};

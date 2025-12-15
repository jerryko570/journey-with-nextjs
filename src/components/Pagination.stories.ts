import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: { control: "number" },
    totalPages: { control: "number" },
    onPageChange: { action: "page changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
  },
  parameters: {
    layout: "centered",
  },
};

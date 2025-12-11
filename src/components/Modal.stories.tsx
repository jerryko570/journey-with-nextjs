import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 단일 Story
export const Default: Story = {
  args: {
    title: "회원가입이 완료되었습니다.",
    btnText: "확인",
    cancelText: "취소",
    type: "one-btn",
  },
};

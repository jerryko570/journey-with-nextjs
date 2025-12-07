import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded", // 여기로 이동! (centered 대신 padded 사용)
    a11y: {
      test: "todo",
    },
  },
};

export default preview;

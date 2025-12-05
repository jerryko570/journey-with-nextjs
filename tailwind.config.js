/* 
- Tailwind가 어떤 파일을 스캔하고 어떤 스타일을 생성할지 정의하는 코드
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // app 폴더의 모든 JS/TS/JSX/TSX 파일 스캔
  ],
  theme: {
    extend: {}, // 기본 테마 확장 (추가 색상, 폰트 등)
  },
  plugins: [], // Tailwind 플러그인 (예: forms, typography)
};

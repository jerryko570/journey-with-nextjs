/*
 * 버튼 컴포넌트
 * @param variant - 버튼 스타일 (기본값: primary)
 * @param size - 버튼 크기 (기본값: lg)
 * @param children - 버튼에 표시될 텍스트/요소
 */

import "./Button.css";

/* 버튼 컴포넌트 Props 타입 정의 */
type ButtonProps = {
  variant?: "primary" | "outline" | "disabled";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  size = "lg",
  children,
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size} w-full`}>
      {children}
    </button>
  );
}

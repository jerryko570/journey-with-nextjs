import "./Input.css";

/**
 * @param {Object} props - Input 컴포넌트 props
 * @param {("default" | "disabled" | "error")} [props.status="default"] - Input 상태 (기본값: "default")
 * @param {string} [props.placeholder="검색어를 입력하세요"] - placeholder 텍스트 (기본값: "검색어를 입력하세요")
 */

type InputProps = {
  status?: "default" | "disabled" | "error";
  placeholder?: string;
  children: React.ReactNode;
};

export default function Input({
  status = "default",
  placeholder = "검색어를 입력하세요",
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={`
        input
        ${status === "disabled" ? "input-disabled" : ""}
        ${status === "error" ? "input-error" : ""}
      `}
      disabled={status === "disabled"}
    />
  );
}

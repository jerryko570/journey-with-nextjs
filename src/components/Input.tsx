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

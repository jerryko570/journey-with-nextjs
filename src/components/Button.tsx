"use client";

type ButtonProps = {
  variant?: "primary" | "outline" | "disabled";
  size?: "sm" | "md" | "lg";
  label: string;
  children: React.ReactNode;
};

export default function Button({
  variant = "disabled",
  size = "lg",
  label = "버튼",
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size} w-full`}>{label}</button>
  );
}

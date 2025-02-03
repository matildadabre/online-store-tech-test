import React, { JSX } from "react";

interface Props {
  children?: JSX.Element | JSX.Element[] | string;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  label,
  children,
  variant,
  disabled,
  onClick,
}: Props): JSX.Element => {
  const bgColor =
    variant === "primary"
      ? "bg-[#4F46E5]"
      : variant === "secondary"
      ? "bg-[#16A34A]"
      : "bg-black";

  return (
    <button
      className={`flex items-center justify-center w-full rounded-[10px] gap-2 p-2 ${bgColor} text-white`}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
